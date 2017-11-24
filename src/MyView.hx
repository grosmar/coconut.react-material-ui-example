package ;

import coconut.ui.View;
import coconut.Ui.hxx;
import coconut.react.*;
import materialui.Button;
import materialui.BottomNavigation;
import materialui.BottomNavigation.BottomNavigationButton;

/**
 * ...
 * @author duke
 */
class MyView extends View<{model:MyModel}>
{
	function render() '
	<div>
		    <Button raised color="primary">Hello World</Button>
		    <BottomMainNavigation model={model}></BottomMainNavigation>
	</div>';
}

class BottomMainNavigation extends View<{model:MyModel}> {

    @:state var state:{value:Int} = {
        value: 0
    };


    function handleChange(event:Any, value:Int, model:MyModel)
    {
        this.state = {value:value};
        model.label = "DOG";
    }

    function render()
    {
        return @hxx
            '<BottomNavigation value={state} onChange={function(e, v) this.handleChange(e, v, model)} showLabels >
                <BottomNavigationButton label={model.label} />
                <if {model.label != "DOG"}>
                    <BottomNavigationButton label="Favorites" />
                </if>
                <BottomNavigationButton label="Nearby"  />
            </BottomNavigation>';
    }
}