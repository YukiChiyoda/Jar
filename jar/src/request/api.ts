import service from ".";

export function linkQuery() {
    return service.get("/LinkQuery.go");
}

export function timeLineQuery() {
    return service.get("/TimeLineQuery.go");
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