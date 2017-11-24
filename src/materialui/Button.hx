package materialui;

// Oversimplified extern definition just for the sake of showcase. Don't use it in production

import materialui.ButtonBase.ButtonBaseClassKey;
import coconut.react.ReactChild;
import coconut.react.ReactComponent;

typedef ButtonProps =/*extends StandardProps< ButtonBaseProps, ButtonClassKey>*/ { //>StandardProps
    ?color:String, // PropTypes.Color | 'contrast';
    ?component:String,//string | React.ComponentType<ButtonProps>;
    ?dense: Bool,
    ?disabled: Bool,
    ?disableFocusRipple: Bool,
    ?disableRipple: Bool,
    ?fab: Bool,
    ?href: String,
    ?raised: Bool,
    ?type: String,

    children:ReactChild
}




@:enum abstract ButtonClassKey(Dynamic) from ButtonBaseClassKey
{
    var Dense = "dense";
    var Label = "label";
    var FlatPrimary = "flatPrimary";
    var FlatAccent = "flatAccent";
    var FlatContrast = "flatContrast";
    var ColorInherit = "colorInherit";
    var Raised = "raised";
    var KeyboardFocused = "keyboardFocused";
    var RaisedPrimary = "raisedPrimary";
    var RaisedAccent = "raisedAccent";
    var RaisedContrast = "raisedContrast";
    var Fab = "fab";
}


@:jsRequire('material-ui/Button', "default")
extern class Button extends ReactComponent<ButtonProps, {}>
{

}
