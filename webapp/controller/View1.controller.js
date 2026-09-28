sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("changerecordreport.controller.View1", {
        onInit() {
            //#ChangeRecord-manageChangeRecords&/C_ChangeRecordObjPg(ChangeRecordUUID=guid'00224814-1e36-1fd0-a983-862f2e39f271',IsActiveEntity=true)/?sap-iapp-state--history=TASCMHS7X1OWKQ08QY7V85QE1WLS0PU4LVHD3Y9V9
        },
        onChangeRecordPress: function (oEvent) {
            var sPath = oEvent.getSource().getBindingContext().getPath();
            let match = sPath.match(/ChangeRecordUUID=guid'([^']+)'/);
            sap.ushell.Container.getServiceAsync("AppLifeCycle").then(() => {
                const oSystem = sap.ushell.Container.getLogonSystem();
                if (oSystem) {
                    if (match) {
                        let guid = match[1];
                        if (oSystem._oData.system === "PLD") {
                            sap.ushell.Container.getService("CrossApplicationNavigation")
                                .toExternal({
                                    target: {
                                        shellHash: "#ChangeRecord-manageChangeRecords&/C_ChangeRecordObjPg(ChangeRecordUUID=guid'" + guid + "',IsActiveEntity=true)"
                                    }
                                });
                        } else if (oSystem._oData.system === "PLQ") {
                            sap.ushell.Container.getService("CrossApplicationNavigation")
                                .toExternal({
                                    target: {
                                        shellHash: "#ChangeRecord-manage?sap-appvar-id=customer.app.variant&/C_ChangeRecordObjPg(ChangeRecordUUID=guid'" + guid + "',IsActiveEntity=true)"
                                    }
                                });
                        }else if (oSystem._oData.system === "PLU") {
                            sap.ushell.Container.getService("CrossApplicationNavigation")
                                .toExternal({
                                    target: {
                                        shellHash: "#ChangeRecord-manage?sap-appvar-id=customer.app.variant&/C_ChangeRecordObjPg(ChangeRecordUUID=guid'" + guid + "',IsActiveEntity=true)"
                                    }
                                });
                        }
                         else if (oSystem._oData.system === "PLP") {
                            sap.ushell.Container.getService("CrossApplicationNavigation")
                                .toExternal({
                                    target: {
                                        shellHash: "#ChangeRecord-manage?sap-appvar-id=customer.app.variant&/C_ChangeRecordObjPg(ChangeRecordUUID=guid'" + guid + "',IsActiveEntity=true)"
                                    }
                                });
                        }
                    }
                }
            });
            // #ChangeRecord-manage?sap-appvar-id=customer.app.variant&/C_ChangeRecordObjPg(ChangeRecordUUID=guid'0022485c-2019-1fe0-adb3-7b442c2fde7f',IsActiveEntity=true)
        },
        onBeforeRebindTable: function (oEvent) {
            var mBindingParams = oEvent.getParameter("bindingParams");
            let oTable = oEvent.getSource().getTable();
            //oTable.setFixedColumnCount(0); 
            // Adjust filters for 'MarketedCountry'
            if (mBindingParams && mBindingParams.filters) {
                mBindingParams.filters.forEach(function (oMultiFilter) {
                    if (oMultiFilter.aFilters) {
                        oMultiFilter.aFilters.forEach(function (oFilter) {
                            if (oFilter) {
                                if (oFilter.aFilters) {
                                    for (let q = 0; q < oFilter.aFilters.length; q++) {
                                        if (oFilter.aFilters[q].sPath === "packsite" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        } else if (oFilter.aFilters[q].sPath === "prodsite" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        } else if (oFilter.aFilters[q].sPath === "AssemblySiteUS" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        } else if (oFilter.aFilters[q].sPath === "Affectcountries" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        } else if (oFilter.aFilters[q].sPath === "Material" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        } else if (oFilter.aFilters[q].sPath === "Specification" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        } else if (oFilter.aFilters[q].sPath === "Recipe" && oFilter.aFilters[q].sOperator === "EQ") {
                                            oFilter.aFilters[q].sOperator = FilterOperator.Contains;
                                        }
                                    }

                                }

                                if (oFilter.sPath === "packsite" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                } else if (oFilter.sPath === "prodsite" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                } else if (oFilter.sPath === "AssemblySiteUS" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                } else if (oFilter.sPath === "Affectcountries" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                } else if (oFilter.sPath === "Material" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                } else if (oFilter.sPath === "Specification" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                } else if (oFilter.sPath === "Recipe" && oFilter.sOperator === "EQ") {
                                    oFilter.sOperator = FilterOperator.Contains;
                                }
                            }
                        });
                    }

                });

            }

            //  this.getView().byId("LineItemsSmartTable").getTable().refresh();
            let oBinding = oEvent.getSource().getTable().getBinding("rows");
            if (oBinding) {
                oBinding.refresh(true);
            }


        }
    });
});