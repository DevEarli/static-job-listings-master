const buttons = document.querySelectorAll('.button');
const searchContainer = document.querySelector('.search-container');
const clear = searchContainer.lastElementChild;
const cards = document.querySelectorAll('.card');
let state = [];

buttons.forEach(button => {
    button.addEventListener('click',function(){
        if(!state.includes(button.innerHTML)){
            state.push(button.innerHTML);
            SearchBox();
            Filter();
            console.log(state);
        }
    });
})

clear.addEventListener('click',function(){
    state = [];
    SearchBox();
    Filter();
});

function SearchBox(){
    const Box = searchContainer.style;
    state.length >0 ? Box.display = 'flex': Box.display = 'none';
    let el = '';
    state.map(a => {
        el+=`<div class="search-button">
            <p>${a}</p>
             <div class="remove"></div>
        </div>`;
    });
    
    searchContainer.firstElementChild.innerHTML = el;
    const remove = document.querySelectorAll('.remove');
    remove.forEach(el => {
        el.addEventListener('click',function(){
            let value = this.previousElementSibling.innerHTML;
            state = state.filter(a => a!=value);
            SearchBox();
            Filter();
        });
    })
}

function Filter(){
    console.log(cards);

    cards.forEach(card => {
        card.style.display = ' flex';
        const Buttons = Array.from(card.querySelectorAll('.button'));
        const Texts = Buttons.map(Button => Button.innerHTML);


        for(let i = 0;i<state.length;i++){
            if(Texts.includes(state[i])){
                continue;
            }else{
                card.style.display = 'none';
            }
        }
    })
}