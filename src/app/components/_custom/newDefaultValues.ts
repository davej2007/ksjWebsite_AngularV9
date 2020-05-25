import { AbstractControl } from "@angular/forms";

export const getAdminValues = [
    { navBar:'General',     section:[   {button : 0, value:true,  name:'Welcome',       disabled : true}]},
    { navBar:'Operation',   section:[   {button : 1, value:true,  name:'Introduction',  disabled : true},
                                        {button : 2, value:false, name:'Button 2',      disabled : false},
                                        {button : 3, value:false, name:'Button 3',      disabled : false},
                                        {button : 4, value:false, name:'Button 4',      disabled : false},
                                        {button : 5, value:false, name:'Button 5',      disabled : false},
                                        {button : 6, value:false, name:'Button 6',      disabled : false}]
                                    },
    { navBar:'Site Admin',  section:[   {button : 7, value:true,  name:'Upcoming Events',           disabled:true},
                                        {button : 8, value:true,  name:'Create New Event',          disabled : false},
                                        {button : 9, value:true,  name:'Button 3',                  disabled : false},
                                        {button :10, value:true,  name:'Update Karaoke Song List',  disabled : false},
                                        {button :11, value:true,  name:'Button 5',                  disabled : false},
                                        {button :12, value:true,  name:'Button 6',                  disabled : false},
                                        {button :13, value:true,  name:'Create New Operator',       disabled : false}]
                                    }]
