defaults:
        elementScroll: '.wrapper__main'
        classTrigger: '.no-heading-picture'
export default class NavigationToggle
    constructor: (element)->
        @element = if element then $(element) else $(defaults.elementScroll)
        console.dir @
        @initialize()
        return @
    initialize: ()->
        self = @
        self.element.scroll ->
            show = self.scrollTop() > 100
            self.element.toggleClass defaults.classTrigger, show
            return
        return
                