const env = {
	category:[{name:'Car', isSelected:false}, 
              {name:'Housing', isSelected:false}, 
              {name:'Services', isSelected:false},
              {name:'Equipments', isSelected:false}, 
              {name:'Dorm', isSelected:false}],
    ads:[
        {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}},
        {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}},
        {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}}
    ],
    rads:[
        {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', 
            owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''},
            review:{review:3, reviewer:120}
        },
        {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
            review:{review:3.5, reviewer:11}
        },
        {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
            review:{review:4, reviewer:89}
        }
    ],
    categories:[
        {title:'Rooms', count:1},
        {title:'Bathroom', count:2},
        {title:'Pool', count:1},
        {title:'Gym', count:1}
    ]



};

module.exports=env;
