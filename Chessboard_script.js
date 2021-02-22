const table = document.querySelector(".inner");
table.addEventListener('click', changeBoard);

function changeBoard()
{
    const squares = document.querySelectorAll(".inner tr td");
    for(const square of squares)
    {
        if(square.className === "black")
        {
            square.classList.remove("black");
            square.classList.add("white");
        }
        else if(square.className === "white")
        {
            square.classList.remove("white");
            square.classList.add("black");
        }
    }
}