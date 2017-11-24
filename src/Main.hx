package;

import js.Browser;


/**
 * ...
 * @author grosmar
 */
class Main
{

    static function main()
    {

        new Main();
    }

    public function new()
    {
        var model = new MyModel({});

        new MyView({model:model}).mountInto(Browser.document.getElementById('app'));
    }


}

