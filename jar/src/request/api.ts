import service from ".";

export function linkQuery() {
    return service.get("/LinkQuery.go");
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