const storeProducts = [
    {
        name: 'TV',
        price: 800,
        inStock: true,
        des: '4k Ultra HD'
    },
    {
        name: 'Game Console',
        price: 300,
        inStock: true,
        des: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200,
        inStock: true,
        des: '16GB RAM 1TB SSD',
    },
    {
        name: 'Headphones',
        price: 100,
        inStock: false,
        des: 'Clearest musti to be heard'
    },
    {
        name: 'Keyboard',
        price: 100,
        inStock: true,
        des: 'Types for you',
    },
    {
        name: 'HDMI Cord',
        price: 5,
        inStock: false,
        des: 'HDMI to USB C',
    },
    {
        name: 'Monitor',
        price: 300,
        inStock: true,
        des: '4k Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200,
        inStock: true,
        des: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60,
        inStock: true,
        des: 'Enjoy for hours'
    },
];
    storeProducts.forEach(function(item){
        if(item.inStock === true) {
            $('#items').append('<div><p>$' + item.price + '</p>' + '<p>' + item.name + '</p>' + '<p>' + item.des + '</p></div>');
        }
    })
    $('#dark').click(function(){
        console.log('clicking is working')
        $('body').toggleClass('darkMode')
      })