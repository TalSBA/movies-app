(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{57:function(e,t,a){},77:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(21),i=a.n(s),n=(a(57),a(15)),r=a(22),o=a.n(r),l=a(92),j=a(93),d=a(46),b=a(97),h=a(94),m=a(95),u=a(99),O=a(2);var x=function(e){var t=e.actor;return Object(O.jsxs)(u.a,{className:"actorCard",border:"warning",children:[Object(O.jsx)(u.a.Img,{variant:"top",src:t.image}),Object(O.jsxs)(u.a.Body,{children:[Object(O.jsx)(u.a.Title,{children:Object(O.jsx)("a",{href:t.imdbLink,target:"_blank",children:t.firstName+" "+t.lastName})}),Object(O.jsxs)(u.a.Text,{children:["Age: ",t.Age()]})]})]})},v=a(26),f=a(45),p=function(){function e(t,a,c,s,i){Object(v.a)(this,e),this.id=(new Date).getTime(),this.firstName=t,this.lastName=a,this.birthday=c,this.image=s,this.imdbLink=i}return Object(f.a)(e,[{key:"Age",value:function(){return(new Date).getFullYear()-new Date(this.birthday).getFullYear()}}]),e}();a(77);var g=function(e){var t,a=Object(c.useState)(""),s=Object(n.a)(a,2),i=s[0],r=s[1],u=Object(c.useState)("firstName"),v=Object(n.a)(u,2),f=v[0],g=v[1],N=Object(c.useState)(null),y=Object(n.a)(N,2),k=y[0],w=y[1];function C(e){g(e.target.value)}return Object(c.useEffect)((function(){setTimeout((function(){o.a.get("actors.json").then((function(e){w(e.data.map((function(e){return new p(e.firstName,e.lastName,e.birthday,e.image,e.imdbLink)})))})).catch((function(e){console.error(e)}))}),3e3)}),[]),k&&(t=k.filter((function(e){return e.firstName.toLowerCase().includes(i.toLowerCase())||e.lastName.toLowerCase().includes(i.toLowerCase())})).sort((function(e,t){var a=e[f],c=t[f];return"age"==f&&(a=e.Age(),c=t.Age()),c>a?-1:a>c?1:0})).map((function(e){return Object(O.jsx)(x,{actor:e},e.id+e.imdbLink)}))),Object(O.jsxs)(l.a,{className:"p-actors",children:[Object(O.jsx)("h1",{className:"title",children:"Actors Gallery"}),Object(O.jsx)(j.a,{className:"input-filter",children:Object(O.jsx)(d.a,{placeholder:"Filter by First Name and Last Name","aria-label":"Filter by First Name and Last Name","aria-describedby":"basic-addon2",onChange:function(e){r(e.target.value)}})}),Object(O.jsxs)(b.a,{className:"sortBy",children:[Object(O.jsx)("span",{children:"Sort By:"}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(b.a.Check,{className:"radioOpt",name:"radio",type:"radio",value:"firstName",label:"First Name",onChange:C}),Object(O.jsx)(b.a.Check,{className:"radioOpt",name:"radio",type:"radio",value:"lastName",label:"Last Name",onChange:C}),Object(O.jsx)(b.a.Check,{className:"radioOpt",name:"radio",type:"radio",value:"age",label:"Age",onChange:C})]},"inline-radio")]}),k?Object(O.jsx)(h.a,{children:t&&t.length>0?t:""}):Object(O.jsx)(m.a,{className:"spinner",animation:"grow",variant:"warning"})]})},N=a(47),y=a(100);a(81);var k=function(e){var t=e.placeholder,a=e.searchText,c=e.onSearchChange,s=e.results,i=e.onResultSelected;return Object(O.jsxs)("div",{className:"c-searchBox",children:[Object(O.jsx)(b.a.Control,{type:"text",placeholder:t,value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)(y.a,{className:"result-box",children:s.map((function(e,t){return Object(O.jsx)(y.a.Item,{action:!0,onClick:function(){return i(t)},children:e},t)}))})]})},w=function e(t,a,c,s,i,n){Object(v.a)(this,e),this.movieName=t,this.duration=a,this.poster="https://image.tmdb.org/t/p/w500"+c,this.director=s,this.mainStars=i,this.plot=n};a(82);var C=function(e){var t=e.movie;return Object(O.jsxs)("div",{className:"movie_card",id:"bright",children:[Object(O.jsxs)("div",{className:"info_section",children:[Object(O.jsxs)("div",{className:"movie_header",children:[Object(O.jsx)("img",{className:"locandina",src:t.poster}),Object(O.jsx)("h1",{children:t.movieName}),Object(O.jsxs)("h4",{children:["By ",t.director]}),Object(O.jsxs)("span",{className:"minutes",children:[t.duration," min"]})]}),Object(O.jsx)("div",{className:"movie_desc",children:Object(O.jsx)("p",{className:"text",children:t.plot})}),Object(O.jsx)("div",{className:"movie_social",children:Object(O.jsx)("ul",{children:t.mainStars.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))})})]}),Object(O.jsx)("div",{className:"blur_back",style:{background:"url(".concat(t.poster,")")}})]})};a(83);var S=function(e){var t=Object(c.useState)([]),a=Object(n.a)(t,2),s=a[0],i=a[1],r=Object(c.useState)(""),j=Object(n.a)(r,2),d=j[0],b=j[1],m=Object(c.useState)([]),u=Object(n.a)(m,2),x=u[0],v=u[1];return Object(O.jsx)("div",{className:"p-movies",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(k,{placeholder:"Add Movie...",searchText:d,onSearchChange:function(e){if(b(e),e){var t="https://api.themoviedb.org/3/search/movie?api_key=396cbe7ed4649f8d87456e09437c030b&query="+e;o.a.get(t).then((function(e){v(e.data.results)}))}else v([])},results:x.map((function(e){return e.original_title})),onResultSelected:function(e){var t="https://api.themoviedb.org/3/movie/".concat(x[e].id,"?api_key=396cbe7ed4649f8d87456e09437c030b"),a="https://api.themoviedb.org/3/movie/".concat(x[e].id,"/credits?api_key=396cbe7ed4649f8d87456e09437c030b"),c=o.a.get(t),n=o.a.get(a);Promise.all([c,n]).then((function(t){var a=t[0].data,c=t[1].data;i(s.concat(new w(x[e].original_title,a.runtime,x[e].poster_path,c.crew[1].name,[c.cast[0].name,c.cast[1].name,c.cast[2].name],a.overview))),b(""),v([])}))}}),Object(O.jsx)(h.a,{children:s.map((function(e,t){return Object(O.jsx)(N.a,{lg:6,md:7,children:Object(O.jsx)(C,{movie:e},t)},t)}))})]})})},_=a(51),L=a(6);a(84);var A=function(e){return Object(O.jsxs)("div",{className:"p-home",children:[Object(O.jsx)("h1",{children:"Actors & Movies Gallery"}),Object(O.jsx)("div",{className:"home-image"})]})},B=a(96),F=a(98),T=a(52);var D=function(e){var t=e.items,a=Object(c.useState)(),s=Object(n.a)(a,2),i=s[0];return s[1],i?Object(O.jsx)(L.a,{to:i}):Object(O.jsx)("div",{children:Object(O.jsxs)(B.a,{bg:"dark",variant:"dark",children:[Object(O.jsx)(B.a.Brand,{href:"#/",children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(F.a,{className:"mr-auto",children:t.map((function(e){return Object(O.jsx)(F.a.Link,{href:"#/".concat(e),children:e})}))})]})})};var I=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{items:["Home","Actors","Movies"]}),Object(O.jsx)(_.a,{children:Object(O.jsxs)(L.d,{children:[Object(O.jsx)(L.b,{exact:!0,path:"/actors",children:Object(O.jsx)(g,{})}),Object(O.jsx)(L.b,{exact:!0,path:"/movies",children:Object(O.jsx)(S,{})}),Object(O.jsx)(L.b,{path:["/","/home"],children:Object(O.jsx)(A,{})})]})})]})};a(88),a(89);i.a.render(Object(O.jsx)("div",{className:"main",children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.905c5fdf.chunk.js.map