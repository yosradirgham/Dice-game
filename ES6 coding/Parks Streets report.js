// Suppose that you're working in a small town administration, and you're in charge of two town elements:
// 3 parks & 4 streets
// All parks and streets have a name and a build year

class Town{
    constructor(name, buildYear,nbrOfStreets,nbrOfParks){
        this.name         = name;
        this.buildYear    = buildYear;
    }
}

class Park extends Town{
    constructor(name, buildYear, nbrOfTrees, surfaceArea){
        super(name, buildYear);
        this.nbrOfTrees  = nbrOfTrees; 
        this.surfaceArea = surfaceArea;//unit:m2
    }
    
    //Tree density
    parkdensity(){
        return this.nbrOfTrees/this.surfaceArea;
    }
    
    //Average age of each park in the town
    parkAge(){
        return new Date().getFullYear()-this.buildYear;
    }
    
    //Name of the park that has more than 1000trees
    parkName(){
        return this.nbrOfTrees >= 1000;
    }
    
}

class Street extends Town{
    constructor(name, buildYear, streetLength, sizeClassif = `normal`){
        super(name, buildYear);
        this.streetLength = streetLength;
        this.sizeClassif  = sizeClassif;
    }

    //size classification of all streets: tiny/small/normal/big/huge; if the size is unknow the default value is 'normal' :)
    sizeClassification(){
        let a;
        if(this.streetLength < 1) a=`tiny`;
        else if(this.streetLength < 2 && this.streetLength>1) a =`small`;
        else if(this.streetLength < 4 && this.streetLength>2) a =`normal`;
        else if(this.streetLength < 5 && this.streetLength>4) a =`big`;
        else a =`huge`;
        return a; //why so complicated ? -_-'
       /* let a = nex Map();
        a.set(1, `tiny`);
        a.set(2, `small`);
        a.set(3, `normal`);
        a.set(4, `big`);
        return a;*/
    }
    
}

    const park1 = new Park(`park1`,1994,409,100);
    const park2 = new Park(`park2`,2017,2009,300);
    const park3 = new Park(`park3`,1984,1009,450);
    
    let parks = [park1,park2,park3];

    const street1 = new Street(`street1`,1994,3,``);
    const street2 = new Street(`street2`,2017,1,``);
    const street3 = new Street(`steert3`,1984,19,``);
    const street4 = new Street(`street`,2004,10,``);
    
    let streets = [street1,street2,street3,street4];

    function averageAge(...parks){
        let avg = 0;
        parks.forEach(x =>  avg += x.parkAge());
        return avg/3;
    }
    
    function totalStreetsLength(...streets){
        let sum = 0;
        streets.forEach(x => sum += x.streetLength);
        return sum;
    }
    
    function averageStreetsLength(...streetLength){
        return totalStreetsLength(...streetLength)/4;
    }

    function report(streetsArr, parksArr){
        console.log(`------------------PARKS REPORT-------------------`);
        parksArr.forEach(x => console.log(`. The density of trees in park${parksArr.indexOf(x)} is ${x.parkdensity()} per square m`));
        console.log(`. The averageStreetsLength age of these parks is ${averageAge(...parksArr)}`);
        console.log(`. The parks that contain more than 1000 trees are the folowwing: `)
        parksArr.forEach(x => {
            if(x.parkName()==true){
                console.log(`       ${x.name}`);
            }
        });
        console.log(`------------------STREETS REPORT----------------`);
        totalStreetsLength(...streetsArr);
        console.log(`. The total length of the town's streets is: ${totalStreetsLength(...streetsArr)}`);//why does this shit only works with the fucking spread operator?
        console.log(`. The average length of the town's streets is: ${averageStreetsLength(...streetsArr)}`);
        streetsArr.forEach(x => console.log(`. Here is the size classification of street${streetsArr.indexOf(x)} is: ${x.sizeClassification()}`));
    }

    report(streets, parks);



