const book = {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환",
};

if ("publishedYear" in book) {
    console.log(`출판 년도는 ${book.publishedYear}`);
} else {
    console.log("출판년도 정보가 없습니다.");
}

