/**
 * ...
 * @author Tyson Van Prooijen
 * @version 0.0.0
 */

class ClientViewApi extends ViewApi
{
    protected views:{[id:string]:Component} = {};


    constructor(){
        super();
    }

    public new(data:{[id:string]:any}):Component{
        this.log( '.new('+ data.classId +', '+ data.id +')', data );
        let view:Component;

        switch ( data.classId ){
            case 'Slider': view = <Slider> new Slider( jQuery(data.target) ); break;
        }

        if (!view){
            this.log('.new( '+ data.classId +', '+ data.id +' ) ---ERROR--- no declared class found!');
            return;
        }

        return this.add( view, data );
    }
}