this.wp=this.wp||{},this.wp.editNavigation=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=408)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},12:function(e,t){!function(){e.exports=this.wp.blocks}()},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(34);var o=n(28),c=n(35);function i(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}}(e,t)||Object(o.a)(e,t)||Object(c.a)()}},2:function(e,t){!function(){e.exports=this.lodash}()},24:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(24);function o(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},3:function(e,t){!function(){e.exports=this.wp.components}()},34:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},35:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},4:function(e,t){!function(){e.exports=this.wp.data}()},408:function(e,t,n){"use strict";n.r(t),n.d(t,"initialize",(function(){return B}));var r=n(0),o=n(63),c=n(3),i=n(1),a=n(14),u=n(4),l=n(5),s=n(6),f=n(9),b=n(2),m=n(12);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){return Object(m.createBlock)("core/navigation-link",{label:e.title.raw,url:e.url})}function v(e){return{title:e.attributes.label,url:e.attributes.url}}var g=n(48);function h(e){var t=e.saveBlocks;return Object(g.useShortcut)("core/edit-navigation/save-menu",Object(r.useCallback)((function(e){e.preventDefault(),t()})),{bindGlobal:!0}),null}h.Register=function(){var e=Object(u.useDispatch)("core/keyboard-shortcuts").registerShortcut;return Object(r.useEffect)((function(){e({name:"core/edit-navigation/save-menu",category:"global",description:Object(i.__)("Save the menu currently being edited."),keyCombination:{modifier:"primary",character:"s"}})}),[e]),null};var E=h;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=e.menuId,n=e.blockEditorSettings,o=function(e){var t=Object(u.useSelect)((function(t){return t("core").getMenuItems({menus:e})}),[e]),n=Object(u.useDispatch)("core").saveMenuItem,o=Object(r.useState)([]),c=Object(a.a)(o,2),i=c[0],l=c[1],s=Object(r.useRef)({});return Object(r.useEffect)((function(){if(t){s.current={};var e,n=[],r=p(t);try{for(r.s();!(e=r.n()).done;){var o=e.value,c=y(o);s.current[c.clientId]=o,n.push(c)}}catch(e){r.e(e)}finally{r.f()}l([Object(m.createBlock)("core/navigation",{},n)])}}),[t]),[i,l,function(){var t,r=i[0].innerBlocks,o=p(r);try{for(o.s();!(t=o.n()).done;){var c=t.value,a=s.current[c.clientId];a?Object(b.isEqual)(c.attributes,y(a).attributes)||n(d({},a,{},v(c),{menus:e})):n(d({},v(c),{menus:e}))}}catch(e){o.e(e)}finally{o.f()}var u,l=p(Object(b.difference)(Object.keys(s.current),r.map((function(e){return e.clientId}))));try{for(l.s();!(u=l.n()).done;)u.value}catch(e){l.e(e)}finally{l.f()}}]}(t),l=Object(a.a)(o,3),O=l[0],j=l[1],g=l[2],h=Object(f.useViewportMatch)("medium");return Object(r.createElement)("div",{className:"edit-navigation-menu-editor"},Object(r.createElement)(s.BlockEditorKeyboardShortcuts.Register,null),Object(r.createElement)(E.Register,null),Object(r.createElement)(s.BlockEditorProvider,{value:O,onInput:function(e){return j(e)},onChange:function(e){return j(e)},settings:w({},n,{templateLock:"all"})},Object(r.createElement)(s.BlockEditorKeyboardShortcuts,null),Object(r.createElement)(E,{saveBlocks:g}),Object(r.createElement)(c.Panel,{className:"edit-navigation-menu-editor__panel"},Object(r.createElement)(c.PanelBody,{title:Object(i.__)("Navigation structure"),initialOpen:h},!!O.length&&Object(r.createElement)(s.__experimentalBlockNavigationList,{blocks:O,selectedBlockClientId:O[0].clientId,selectBlock:function(){},showNestedBlocks:!0,showAppender:!0}))),Object(r.createElement)(c.Panel,{header:Object(r.createElement)(c.Button,{isPrimary:!0,onClick:g},Object(i.__)("Save navigation")),className:"edit-navigation-menu-editor__panel"},Object(r.createElement)(c.PanelBody,{title:Object(i.__)("Navigation menu")},Object(r.createElement)(s.WritingFlow,null,Object(r.createElement)(s.ObserveTyping,null,Object(r.createElement)(s.BlockList,null)))))))}function P(e){var t=e.blockEditorSettings,n=Object(u.useSelect)((function(e){return e("core").getMenus()})),o=Object(r.useState)(0),l=Object(a.a)(o,2),s=l[0],f=l[1];return Object(r.useEffect)((function(){(null==n?void 0:n.length)&&f(n[0].id)}),[n]),n?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.Card,{className:"edit-navigation-menus-editor__menu-selection-card"},Object(r.createElement)(c.CardBody,null,Object(r.createElement)(c.SelectControl,{className:"edit-navigation-menus-editor__menu-select-control",label:Object(i.__)("Select navigation to edit:"),options:n.map((function(e){return{value:e.id,label:e.name}})),onChange:function(e){return f(e)}}))),!!s&&Object(r.createElement)(k,{menuId:s,blockEditorSettings:t})):Object(r.createElement)(c.Spinner,null)}function _(){return Object(r.createElement)(r.Fragment,null,"Menu locations editor")}function x(e){var t=e.blockEditorSettings;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.SlotFillProvider,null,Object(r.createElement)(c.DropZoneProvider,null,Object(r.createElement)(c.FocusReturnProvider,null,Object(r.createElement)(c.Popover.Slot,{name:"block-toolbar"}),Object(r.createElement)(c.TabPanel,{className:"edit-navigation-layout__tab-panel",tabs:[{name:"menus",title:Object(i.__)("Edit Navigation")},{name:"menu-locations",title:Object(i.__)("Manage Locations")}]},(function(e){return Object(r.createElement)(r.Fragment,null,"menus"===e.name&&Object(r.createElement)(P,{blockEditorSettings:t}),"menu-locations"===e.name&&Object(r.createElement)(_,null))})),Object(r.createElement)(c.Popover.Slot,null)))))}function B(e,t){Object(o.registerCoreBlocks)(),Object(o.__experimentalRegisterExperimentalCoreBlocks)(t),Object(r.render)(Object(r.createElement)(x,{blockEditorSettings:t}),document.getElementById(e))}},48:function(e,t){!function(){e.exports=this.wp.keyboardShortcuts}()},5:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},6:function(e,t){!function(){e.exports=this.wp.blockEditor}()},63:function(e,t){!function(){e.exports=this.wp.blockLibrary}()},9:function(e,t){!function(){e.exports=this.wp.compose}()}});