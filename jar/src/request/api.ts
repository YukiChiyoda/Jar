import service from ".";

export function queryFriend() {
    return service({
        url: "/",
        method: "get"
    });
}

interface searchData {
    limitExpression: Array<string>;
}
export function searchData(data: searchData) {
    return service({
        url: "/",
        method: "post",
        data
    });
}