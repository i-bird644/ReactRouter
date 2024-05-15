

/**
 * 
 * @param {Array} list 
 * @param {String} director 
 */
export function filterFilmsByDirector(list, director) {
    
    if (director == "") {
        
        return list;
    }
    //Cool code @hunter_andersen
    return list.filter((element) => {
        return (element.director === director)
    });

}

/**
 * 
 * @param {Array} list 
 * @param {string} prop 
 */
export function getListOf(list, prop) {
    
    const resultArr = [];

    for (let i = 0; i < list.length; i++){

        //ITerates over the list array param
        //and obtains the ele's prop value

        //N.B: each ele is an object.

        //push each otained prop into resultArr
        if (!resultArr.includes(list[i][prop])) {

            resultArr.push(list[i][prop]);

        }
            
        

    }

    return resultArr;
}