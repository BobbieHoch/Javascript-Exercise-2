let name1 = "Fred";
let name2 = "Bart";
let name3 = "Todd";

let name1Size = (name1.length)
let name2Size = (name2.length)
let name3Size = (name3.length)


if
    (name1Size > name2Size > name3Size)
    {console.log (name1 + " has the longest name.");
}
else if
    (name2Size >name1Size >  name3Size)
    {console.log(name2 + " has the longest name.");
}
else if
    (name3Size > name1Size > name2Size)
    {console.log(name3 + " has the longest name.");
}
else 
    (name1Size=name2Size)
    {console.log(name1 + name2 " tie for the longest name");
}
else 
    (name2Size=name3Size)
    {console.log( name2 + name3  " tie for the longest name.");
}
else 
    (name1Size=name3Size)
    {console.log( name1 + name3 ' tie for the longest name.');
    }
else 
    (name1Size == name2Size == name3Size)
    {console.log("All three names" + name1 + name2 + name3  "are the same length.");
}