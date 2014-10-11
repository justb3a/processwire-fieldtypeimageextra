### ProcessWire 

# Fieldtype Image Extra (Multi-languages)

## Overview:

Extends Filetype Image. Adds description, title, link and orientation.

Designed for use with ProcessWire 2.4/2.5
[http://processwire.com](http://processwire.com)

## Installation

1. Clone the module and place FieldtypeImageExtra in your site/modules/ directory. 

```
git clone https://github.com/justonestep/processwire-fieldtypeimageextra.git your/path/site/modules/FieldtypeImageExtra
```

2. Login to ProcessWire admin and click Modules. 
3. Click "Check for new modules".
4. Click "install" next to the new FieldtypeImageExtra module. 
  If you need multi-language support, you have to install the FieldtypeImageExtraLanguage module.
5. That's all - no settings are required but possible. 

### Define your custom fields

1. Login to ProcessWire admin and click Modules.
2. Open `Images Extra Inputfield` Settings.

The following fields are available by default:

* orientation - image orientation
* orientation values - values to use as classnames or identifiers for different image orientations
* title - image title to use for title/alt tag or/and caption, if empty, the content will be generated from the applications filename
* description - image description
* link - image link to internal pages

If these fields are not enough for you, you can add any other field (for example _author_ and _location_)
by writing it (separated by comma) in the field `otherField`.

If you don't need all custom fields, you can easily disable them.

One more exception is `orientationValues`.
Here you can insert identifiers for classnames or similar separated by comma.
This values will be available in a dropdown list.

## Usage

1. Under Setup and Fields create a new field using type `ImageExtra` or `ImageExtraLanguage`.
2. After entering the new field name and label, click Save.
3. Configure it depending on your own needs.
4. Save.
5. Add your new field to one or more Templates.

## Accessing the value

This is no different than accessing the value of any other field.

```php
  $image = $page->image->getRandom();
  echo $image->title;
  echo $pages->get($image->link)->url
```

For use with [TemplateTwigReplace](http://modules.processwire.com/modules/template-twig-replace):

```twig
  {% set image = page.images.getRandom() %}
  {{image.title}}
  {{pages.get(image.link).url}}
```

## Screenshots

**Module `Images Extra Inputfield` Settings**

![Image Extra Inputfield Settings](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/InputfieldImageExtra-settings.png)

**Assign the new type to a field**

![Assign it](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/FieldSettings-ImageExtra.png)

![Assign it](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/FieldSettings-ImageExtraLanguage.png)

**It's really important to confirm the change, because it may need database updates**

![Confirm changes](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/FieldSettings-confirm.png)

**ImageExtra**

Backend

![Backend Settings](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/ImageExtra-backend.png)

Here is a litte example how to access the new fields:

```php
// if there are images, lets choose one to output in the sidebar
if (count($page->images)) {
  // if the page has images on it, grab one of them randomly...
  $image = $page->images->getRandom();
  // resize it to 400 pixels wide
  $image = $image->width(400);
  // output the image at the top of the sidebar
  $sidebar = "<img src='$image->url' alt='$image->description' />" .
    "<h3>$image->title</h3>" .
    "<blockquote>$image->description</blockquote>" .
    "<p>$image->author ($image->location)</p>" .
    $page->sidebar;
}
```

And the result in the frontend may look like this:

![Frontend](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/ImageExtra-frontend.png)

**ImageExtraLanguage**

Backend

![Backend](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/ImageExtraLanguage-default-backend.png)

![Backend](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/ImageExtraLanguage-other-backend.png)

Frontend

Depending on the selected language you will get a different output.  
If you don't translate an field, you get the value of the default language (look at author).

![Language](https://github.com/justonestep/processwire-fieldtypeimageextra/blob/master/screens/ImageExtraLanguage-frontend.png)
