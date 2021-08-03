var images = ["icons8-old-fashioned-family-photo-48.png","Dad's Pic.jpeg","Mom's Pic.jpg","My Pic.jpeg", "Jay's Pic.jpeg"];

var names = ["Family Book", "Kamal Loungani", "Tamanna Loungani", "Ranbir Loungani (Me)", "Jay Loungani"];

var r = 0
function next();
{
    r++;
    var Members_In_Array = 4;
    if(r > Members_In_Array)
    {
        r = 0;
    }
    var Updated_Image = images[r];
    var Updated_Name = names[r];
    document.getElementById("Family_Image").src = Updated_Image;
    document.getElementById("Family_Member").innerHTML = Updated_Name;
}