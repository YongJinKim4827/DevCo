const BOARD_CATEGORY = [
    {"name" : "Q&A",       "link" : "/question"},
    {"name" : "지식공유",   "link" : "/knowledge"},
    {"name" : "커뮤니티",   "link" : "/community"},
    {"name" : "공지사항",   "link" : "/notice"}
];

const QUESTION = "question";
const COUUMNITY = "community";
const KNOWLEDGE = "knowledge";
const NOTICE = "notice";
const WRITING = "writing";

const HOST_NAME = window.location.hostname;;
const PORT = "8080";
const PROTOCOL = "http:"
const REQUEST_ORIGIN = `${PROTOCOL}//${HOST_NAME}:${PORT}`
const SAMPLE_DATA_TEST = "SAMPLE";
const DB_DATA_TEST = "DB"
