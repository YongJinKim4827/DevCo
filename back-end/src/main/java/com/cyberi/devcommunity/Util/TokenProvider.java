package com.cyberi.devcommunity.Util;

import com.cyberi.devcommunity.dto.JwtToken;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.Base64Utils;

import java.lang.reflect.Array;
import java.security.Key;
import java.util.Arrays;
import java.util.Base64;
import java.util.Base64.*;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class TokenProvider {
    private static final String AUTHORITIES_KEY = "AUTH";
    private static final String BEARER_TYPE = "Bearer";
    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30;
    private static final long REFRESH_TOKEN_EXPIRE_TIME = 1000 * 60 * 60* 36;
    private final Key key;

    public TokenProvider(@Value("${jwt.secretKey}") String secretKey){
        byte[] keyBytes = Base64Utils.decodeFromUrlSafeString(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public JwtToken generateToken(Authentication authentication){
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        String accessToken = Jwts.builder()
                .setSubject(authentication.getName())
                .claim("AUTH", authorities)
                .setExpiration(new Date(System.currentTimeMillis() +  ACCESS_TOKEN_EXPIRE_TIME))
                .signWith(key, SignatureAlgorithm.HS256)

                .compact();

        String refreshToken = Jwts.builder()
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TOKEN_EXPIRE_TIME))
//                .signWith(key, SignatureAlgorithm.HS256)
                .compact();


        return JwtToken.builder()
                .grantType(BEARER_TYPE)
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    public boolean validateToken(String token){
        try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        }catch(io.jsonwebtoken.security.SecurityException | MalformedJwtException e){
            System.out.println("Invalid JWT Token : " + e);
        }catch(ExpiredJwtException e){
            System.out.println("Expired JWT Token : " + e);
        }catch(UnsupportedJwtException e){
            System.out.println("Unsupported JWT Token : " + e);
        }catch (IllegalArgumentException e){
            System.out.println("JWT Claims String is empty : " + e);
        }
        return false;
    }

    public Authentication getAuthentication(String accessToken){
        Claims claims = parseClaims(accessToken);
        if(claims.get("AUTH") == null){
            throw new RuntimeException("권한 정보가 없는 토큰입니다.");
        }
        Collection
                <? extends GrantedAuthority> authrities =
                Arrays.stream(claims.get("AUTH").toString().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList()
                );
        UserDetails principal = new User(claims.getSubject(), "", authrities);
        return new UsernamePasswordAuthenticationToken(principal, "", authrities);
    }

    private Claims parseClaims(String accessToken){
        try{
            return Jwts.parserBuilder().setSigningKey(key).build()
                    .parseClaimsJws(accessToken).getBody();
        }catch (ExpiredJwtException e){
            return e.getClaims();
        }
    }

}
