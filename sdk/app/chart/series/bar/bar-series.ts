// >> binding-context-bar-series
import dataModelModule = require("../../data-models/categorical-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new dataModelModule.CategoricalDataModel();
}
// << binding-context-bar-series