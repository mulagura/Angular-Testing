describe('hello test',()=>{

    let expectedString = '';

    //setting up      before each test set variable    sets the variable
    beforeEach(()=>{

        expectedString = 'hello';

    });

    //afterEach cleaning up the variable
    afterEach(()=>{

        expectedString = '';

    });

    //toBe
    it('should contain hello string',()=>{

        expect('hello').toBe(expectedString);

    });

    //toContain
    it('should contain hello string',()=>{

        expect('hello123').toContain(expectedString);

    });

    // not
    it('should not contain hello in hi',()=>{

        expect('hello').not.toBe('hi');

    });

});

//xdescribe    allows you not to run this particulat test, it just passes to another

    // xdescribe('bonjour test',()=>{

    //     it('should contain bonjour string',()=>{
    
    //         expect('bonjour').toBe('bonjour');
    
    //     });
    
    // });

//fdescribe     allows to force run, ignores all

    // fdescribe('bye test',()=>{

    //     it('should contain bye string',()=>{
    
    //         expect('bye').toBe('bye');
    
    //     });
    
    // });

