(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,t,a){e.exports=a(76)},62:function(e,t,a){},64:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),o=a.n(l),i=(a(62),a(14)),c=a(29),m=(a(64),a(35)),u=a(96),s=r.a.createContext({}),f=a(11),d=a(3),p=a(28),h=a(104),g=a(99),b=a(100),y=a(103),E=a(101),v=a(106),x=a(98),P=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),M=function(e){var t=e.remainingBalance,a=e.monthlyPayment,n=e.interestRate,r=n/100/12,l=t/a*r;if(l>1)return{payoffMonths:"\u221e",payoffYears:"\u221e",total:P.format(t),timeRemaining:"Your payments are not sufficient enough to cover interest. Loan will never be paid off.",valid:!1};var o=Math.abs(1-l),i=1+r,c=Math.log10(1/o)/Math.log10(i),m=Math.ceil(c),u=c/12,s=c*a,f=s-t,d=function(e){for(var t=0,a=0,n=0;e;)e>=365?(t++,e-=365):e>=30?(a++,e-=30):(n++,e--);return"".concat(t," Years, ").concat(a," Months and ").concat(n," Days")}(Math.round(30.4167*c)),p=function(e){for(var t=[],a=new Date((new Date).getFullYear(),(new Date).getMonth());e>0;)a.setMonth(a.getMonth()+1),t.push(a.toLocaleString("default",{month:"long",year:"numeric"})),e--;return t}(m),h=function(e,t,a){for(var n=[];e>0;){var r=t-e*a;r>e?n.push(0):n.push((e-r).toFixed(2)),e-=r}return n}(t,a,r);return{remainingBalance:P.format(t),monthlyPayment:P.format(a),interestRate:Number.parseFloat(n).toFixed(2),payoffMonths:c.toFixed(2),payoffYears:u.toFixed(2),total:P.format(s),totalInterestPaid:P.format(f),timeRemaining:d,payoffScheduleMonthYear:p,payoffScheduleBalances:h,valid:!0}},S=function(){var e=Object(n.useContext)(s),t=e.debt,a=e.debtSet,l=e.debtList,o=e.debtListSet,i=function(e){return function(n){a(Object(p.a)({},t,Object(d.a)({},e,n.target.value)))}};return r.a.createElement(h.a,{component:"form",onSubmit:function(e){e.preventDefault();var n=M(t);!0===n.valid?(o([].concat(Object(f.a)(l),[n])),a({remainingBalance:"",monthlyPayment:"",interestRate:""})):alert(n.timeRemaining)},sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement(g.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(b.a,{htmlFor:"remainingBalance"},"Remaining Balance"),r.a.createElement(y.a,{id:"remainingBalance",value:t.remainingBalance,onChange:i("remainingBalance"),startAdornment:r.a.createElement(E.a,{position:"start"},"$"),label:"Remaining Balance",type:"number",required:!0,inputProps:{max:1e9,step:".01",min:1}})),r.a.createElement(g.a,{sx:{m:1,width:"48%"},variant:"filled"},r.a.createElement(b.a,{htmlFor:"filled-adornment-amount"},"Monthly Payment"),r.a.createElement(v.a,{id:"monthlyPayment",value:t.monthlyPayment,onChange:i("monthlyPayment"),startAdornment:r.a.createElement(E.a,{position:"start"},"$"),type:"number",required:!0,inputProps:{max:1e8,step:".01",min:1}})),r.a.createElement(g.a,{sx:{m:1,width:"48%"},variant:"filled"},r.a.createElement(b.a,{htmlFor:"filled-adornment-amount"},"Interest Rate"),r.a.createElement(v.a,{id:"interestRate",value:t.interestRate,onChange:i("interestRate"),startAdornment:r.a.createElement(E.a,{position:"start"},"%"),type:"number",required:!0,inputProps:{min:.01,max:99.99,step:".01"}})),r.a.createElement(x.a,{sx:{m:1},variant:"outlined",type:"submit"},"Submit"))},w=a(107),B=a(108),R=a(109),F=a(110),j=a(111),C=a(112),O=a(113),D=function(){var e=Object(n.useContext)(s).debtList;return e.length>0?r.a.createElement(w.a,{sx:{marginTop:5,marginBottom:5},component:B.a},r.a.createElement(R.a,{sx:{minWidth:650},"aria-label":"simple table"},r.a.createElement(F.a,null,r.a.createElement(j.a,null,r.a.createElement(C.a,null,"Remaining Balance"),r.a.createElement(C.a,{align:"center"},"Monthly Payment"),r.a.createElement(C.a,{align:"center"},"Interest Rate"),r.a.createElement(C.a,{align:"center"},"Payoff Time"),r.a.createElement(C.a,{align:"center"},"Total Payoff Amount"))),r.a.createElement(O.a,null,e.map(function(e,t){return r.a.createElement(j.a,{key:t,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(C.a,{component:"th",scope:"row"},e.remainingBalance),r.a.createElement(C.a,{align:"center"},e.monthlyPayment),r.a.createElement(C.a,{align:"center"},e.interestRate,"%"),r.a.createElement(C.a,{align:"center"},e.timeRemaining),r.a.createElement(C.a,{align:"center"},e.total))})))):null},L=a(17),Y=a(74);L.d.register(L.c,L.i,L.k,L.h,L.o,L.p,L.f);var I,T,k={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Debt Payoff Timeline"}}};function A(){var e=Object(n.useContext)(s).debtList,t={labels:function(e){var t=[];return e.forEach(function(e){e.payoffScheduleMonthYear>t&&(t=e.payoffScheduleMonthYear)}),t}(e),datasets:e.map(function(e,t){return{label:"Debt ".concat(t+1),data:e.payoffScheduleBalances,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",cubicInterpolationMode:"monotone",tension:.6}})};return e.length>0?r.a.createElement(Y.a,{options:k,data:t}):null}var q=m.a.div(I||(I=Object(c.a)(["\n  margin: auto;\n  width: 80%;\n  padding-top: 1rem;\n"]))),N=m.a.h1(T||(T=Object(c.a)(["\n  text-align: center;\n"])));var W=function(){var e=Object(n.useState)({remainingBalance:"",monthlyPayment:"",interestRate:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),m=c[0],f=c[1];return r.a.createElement(s.Provider,{value:{debt:a,debtSet:l,debtList:m,debtListSet:f}},r.a.createElement(u.a,null),r.a.createElement(q,null,r.a.createElement(N,{className:"title"},"Debt Payoff"),r.a.createElement(S,null),r.a.createElement(D,null),r.a.createElement(A,null)))},J=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,97)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),J()}},[[57,3,2]]]);
//# sourceMappingURL=main.4f858582.chunk.js.map