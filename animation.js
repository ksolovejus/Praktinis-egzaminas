// When clicking on .item-1
document.querySelector('.item-1').addEventListener('click', () => {
    // Move .item-1 to grid-row: 1/1 grid-column: 1/1
    document.querySelector('.item-1').style.gridRow = '1/1';
    document.querySelector('.item-1').style.gridColumn = '1/1';
    // Move .item-2 to grid-row: 1/1 grid-column: 2/2
    document.querySelector('.item-2').style.gridRow = '1/1';
    document.querySelector('.item-2').style.gridColumn = '2/2';
    // Move .item-3 to grid-row: 2/2 grid-column: 1/3
    document.querySelector('.item-3').style.gridRow = '2/2';
    document.querySelector('.item-3').style.gridColumn = '1/3';
    });
    
    // When clicking on .item-2
    document.querySelector('.item-2').addEventListener('click', () => {
    // Move .item-2 to grid-row: 1/1 grid-column: 1/1
    document.querySelector('.item-2').style.gridRow = '1/1';
    document.querySelector('.item-2').style.gridColumn = '1/1';
    // Move .item-1 to grid-row: 1/1 grid-column: 2/2
    document.querySelector('.item-1').style.gridRow = '1/1';
    document.querySelector('.item-1').style.gridColumn = '2/2';
    // Move .item-3 to grid-row: 2/2 grid-column: 1/3
    document.querySelector('.item-3').style.gridRow = '2/2';
    document.querySelector('.item-3').style.gridColumn = '1/3';
    });
    
    // When clicking on .item-3
    document.querySelector('.item-3').addEventListener('click', () => {
    // Move .item-3 to grid-row: 1/1 grid-column: 1/3
    document.querySelector('.item-3').style.gridRow = '1/1';
    document.querySelector('.item-3').style.gridColumn = '1/3';
    // Move .item-1 to grid-row: 2/2 grid-column: 1/1
    document.querySelector('.item-1').style.gridRow = '2/2';
    document.querySelector('.item-1').style.gridColumn = '1/1';
    // Move .item-2 to grid-row: 2/2 grid-column: 2/2
    document.querySelector('.item-2').style.gridRow = '2/2';
    document.querySelector('.item-2').style.gridColumn = '2/2';
    });