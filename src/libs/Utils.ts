export default class Utils {
    
    public static isNotBlank(value: string) : boolean {
        let result = typeof value === 'undefined' || value === '';
        return !result;
    }

    public static transpose(a: {}[]) {
        return Object.keys(a[0]).map(function(c) {
          return a.map(function(r) {
            return r[c];
          });
        });
     }  
}
