export default function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}