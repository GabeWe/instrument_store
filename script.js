Vue.component('details-modal', {
  props:{
    instrument: Object
  },
  template: '#details-modal-template'
});

Vue.component('create-modal', {
  props:{
    newInstrument:{
      type: Object,
      default: function(){
        return{
          name: "",
          type: "",
          price: 0,
          brand: "",
          image: "",
          inCart: false,
          details: false
        }
      }
    }
  },
  template: '#create-modal-template'
});

new Vue({
  el: "#app",
  data:{
    showCreateModal: false,
    myCart: [],
    instruments: [{
       name: "Jaguar",
      type: "Guitar",
      price: 1249.99,
      brand: "Fender",
      image: "https://media.guitarcenter.com/is/image/MMGS7/L58820000002000-00-1600x1600.jpg",
      inCart: false,
      details: false
    },
    {
      name: "Piaggero ",
      type: "Keyboard",
      price: 219.99,
      brand: "Yamaha",
      image: "https://www.yamaha.com/yamahavgn/PIM/Images/NP-11_540x540_735x735_972aa1591a87938be4552cd03e8d70ae.jpg",
      inCart: false,
      details: false
    },
    {
      name: "Maton S60",
      type: "Guitar",
      price: 1148.99,
      brand: "Maton",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8ODg4NDw4NDQ0ODQ0ODg4NDg8PDw8PFhEWFhUVFRUYHSggGBolGxUVITEhJSkrLjAvFx8zOTMtNygtLisBCgoKDg0OGxAQGS0lHyItNTctLS0tMC0tLS0uNSsrLS0tLS01Ky0tLS0tLS0tLTUtLS0tLS01LS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcDBQYCBAj/xABGEAABAwIDBAYFCAgFBQEAAAABAAIDBBEFEiEGMUFhBxMiUXGBFDKRobEjQkNScoLC8BUkM3OSosHhU2KDsrNEY9HT8SX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQH/xAAmEQEBAAIBAwMFAQEBAAAAAAAAAQIRAwQhMRIzgSMyQVFxIvBh/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERARfPX10NNG6aeRkMTLZpJHBrRcgDXmSB5rg67pVgFQIqandUQi+eZzzFe31GlpJHM2Ucs8cfNTw48s/tixEXNbNbYRYhM+BkM0bmR9ZmdlLS24BvY6G5C6VMcplNx5lhcbqiIikiIiICIiAiIgIiICIiAiIgIiICIiAiIg4npcnZ+jDTOkbHJVTwMizGwJZI2Q+XZt5hUzhkY6whx7IFg4btXAA6X014X81bXTFLG+npaXNEKl9SKhgfYO6qNp6wtPf2mi3HXuVZRUbWZbDIXMYcriRq1tn6Hdqd1+BWTnlt/jd02UmOrfLo9nqypjbVx0Mb31TooHl8eskcInDTlaAb5tfANOndcOEmY08BqAG1BiYZmixAfbUaaezRVXgWN1UEAiw+lM0xrGCeQMD814szIXadkag5juuTpqRbwVvBNYRT1N3yVKIiuZxERAREQEREBERAREQEREBERAREQEREFVdMj2Sy08cYa+alhqZZyLZo2SMAYD45XG3Id4vwVHIZerJc5z8tnZwL6cQeIsBrv7+9dh0s0Do691Vla1lRRMYHNJu58ZfnzDwMXsC5zZjCpKmVkEYu9xyjWwFhqSeA0JWDnv8AqzTp9Pj/AIl34/6u02d2lNN6BRUtJndUVMoq5MgvK67W5mkHXK1zbkg2DO4XVorXYBhTKKmjp25SW3dI9otnkcbudx3n+i2K2YTWMlc/kymWVsERFNAREQEREBERAREQEREBERAREQEREBERBXXSpVRNlpWS04qB1NS5uaWSNre0wG4YQTew48Oa+Xoxqmy1sgbT09O1lI9w6lr8xLpGb3OcSd3vXnpeF6ilF3A+jzWsBxPjyWPont6bMNQfQzcEg/SM5LLfda57K1URFqZBERAREQEREBERAREQEREBERAREQEREBERBWHSwzNVUo1uIX2AF73z8+Sw9FdhXyDXWicddPpI+HD2rP0qG1XTEEgiC4IGoN5Nd6wdF1vTb660cw1twkiWO+78tk9n4WqiItjGIiICIiAiKEEqFKICIiAiIgIiICIiAiIgIiIKv6UW5q6nYASTTssAQNS6W2qw9GBHp2gI/V5xqb/Oi5L10qOHp0Qtf9Ui3k8XzheejOwrgALfIT8T/wBs8SsV935bZ7XwtZERbWIREQEREBERAREQEREBERAREQEREBERAREQVZ0l2OJxB18nolNmLWB7gDLPewPG3NeOjcn09twR8jLwsPVjTpKGbEmi/wD0tKLdo/STdwUdHYtXxag3il3X/wANveOSxX3fluk+l8LXREW1hEREBERARFCCUREBERAREQEREBERAREQEREFUdIr7YpcFwcKemsQ61u1IVHR+bV8FuLJhvub9Sp6RL/pFxvYdVTj51r9ru/OijYgubXUhdud1tic3aBhIB1HfcLBfd+W+e18LYREW9gEREBFCIJRQpQEUKUBERAREQEREBERAREQEWGoqGxi7jv3AauceQWukxSQ+qxjBwLyXu82tsB7SoZ8mOPmp44ZZeIr/pBJOJOHDJBvJAuG+PMrV4JM6KWORgbmi7bRnzXytabbzovr2re6XEHOk01iBexpDQMreFz8V42To2zzZHHKAx3aic0utkbprcW8lgzu7bG/CaklWPQbWUMzW3qI4XmwMc7hG4O7tdD4hbpjw4BzSHNcAQQbgg7iDxXB1GxkL900wJ+uInD3NHxXqpxWvwqmY3qqeppIWhvXNEgfG0cZG37LR9YXAAubb1o4+o39zLycUn2u8UKuY+k4tNpaMW745eHIEa+1dXs9tVSYh2YZC2YC5gls2UDiQL2cOYJ3i6vx5McvFV5cWeM3Y3ihEU1YiKUEIiIClQiCUREBERAREQF4lkDGlx3NBJXtfFiruw0fWkaPZd34VHLL042vcZu6ax7i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",
      inCart: false,
      details: false
    },

   
    {
      name: "Fender Player Series Stratocaster HSS",
      type: "Guitar",
      price: 929.99,
      brand: "Fender",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnDNWoNKSansDc-rkxtp7kB2esZg4EPtn7wRo-2LOW_DlguWjH54R64fEWdZCTwfIFUAQPeaHOK15KLpIdX60-Ecn0MocDPMh3WzzozjVN&usqp=CAE",
      inCart: false,
      details: false
    }, 
    {
      name: "Maton Guitars EBG-808C Nashville Cutaway",
      type: "Bass",
      price: 2800,
      brand: "Maton",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjUFVdM_XmIyDWAGMClTxiCTgaoTJmf0-CrxbrsQekgaSo79dsOS5shdK-BNBl_HnOAsQXxMrOU6kaAwzboujUap5eGgYRZE1SOY5fWo0&usqp=CAE",
      inCart: false,
      details: false
    },  
    
    {
      name: "Yamaha PAC112V Electric Guitar",
      type: "Electric Guitar",
      price: 309,
      brand: "Yamaha",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfg0d9FJtQb5p2FVkJDRPJNwnjWYOn0PG-l8tJb5OJpYE4Zkx3f8NXh4JbFg-hnPJ5SGzM4UFCRw024Fd5OWC_5GwiHn_dMW2ykt1AHDOsYKFZuENvUDae&usqp=CAE",
      inCart: false,
      details: false            
     }                                      
   ],
  },
  methods:{
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.myCart.push(instrument);
    },
    emptyCart: function(){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
      })
      this.myCart = [];
    },
    createInstrument: function(newInstrument){
      var errors = [];
      if (newInstrument.name === ""){
        errors.push("Name must not be empty");
      }
      if (newInstrument.type === ""){
        errors.push("Type must not be empty");
      }
      if (newInstrument.price <= 0){
        errors.push("Price must be greater than 0");
      }
      if (newInstrument.brand === ""){
        errors.push("A brand must be selected");
      }
      if (errors.length > 0){
        alert(errors);
      }else{
        this.instruments.push(newInstrument);
        this.showCreateModal = false;
      }
    }
  }
});