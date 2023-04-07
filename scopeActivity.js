function outer(){
  let a = 'My string';
  let b = {property: 'value' }
  console.log('a:', a);
  console.log('b:', b);

    function inner(a, b) {
        console.log('a:', a);
        console.log('b:', b);

        //new values
        a = 'New string'
        b.property = 'new value'

        console.log('New a:', a);
        console.log('New b:', b);
    }
  
    inner(a, b);

    //values after inner execution
    console.log('a after inner:', a);
    console.log('b after inner:', b);
  }
  
  outer();