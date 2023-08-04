export const upperString = (str:string) => {
    // return str.replaceAll('-',' ').replace(/([A-Z])/g, " $1").trim().replace(/^\w/, c => c.toUpperCase());
    return str.replace(/(^|-)(\w)/g, function(match, p1, p2) {
        return (p1 && " ") + p2.toUpperCase();
      });
}  