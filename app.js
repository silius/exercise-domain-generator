let pronoun = ['the','our'];
let adj = ['great', 'big','last'];
let noun = ['jogger','racoonnet','ofus'];
let domains = ['com','net','org','us'];

const main = () => {
    for (p in pronoun) {
        for (a in adj) {
            for (n in noun) {
                for (d in domains){
                    str=`${pronoun[p]}${adj[a]}${noun[n]}`
                    if (domains.includes(str.slice(str.length -2)))
                        console.log(`${pronoun[p]}${adj[a]}${noun[n].slice(0,2)}.us`) 
                        else if (domains.includes(str.slice(str.length -3)))
                             console.log(`${pronoun[p]}${adj[a]}${noun[n].slice(0,(noun[n].length - 3))}.${domains[d]}`)
                        else console.log(`${pronoun[p]}${adj[a]}${noun[n]}.${domains[d]}`)                    
                }
            }
        }
    }
}

console.log(`It's alive...`);
console.log(main());