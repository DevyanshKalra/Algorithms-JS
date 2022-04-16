let n;
let x=[3,4,2,5,1,6];
insertionsort(x);

function insertionsort(n){
    for(let i=1;i<n.length+1;i++){
        let key=n[i];
        let j=i-1;
        while (j>=0 && n[j]>key){         //while (j>=0 && n[j]<key){   (for descending order)
            n[j+1]=n[j];
            n[j]=key;
            j=j-1;
        }
        
    }
    console.log(n);
}
