package materialui;

// Oversimplified extern definition just for the sake of showcase. Don't use it in production

import coconut.react.ReactChild;
import coconut.react.ReactComponent;
@:jsRequire('material-ui/BottomNavigation', "default")
extern class BottomNavigation extends ReactComponent<{onChange:Any->Int->Void, value:{value:Int}, ?showLabels:Bool, children:Array<ReactChild>}, Dynamic > {}

@:jsRequire('material-ui/BottomNavigation', "BottomNavigationButton")
extern class BottomNavigationButton extends ReactComponent<{?label:String},{}> {}