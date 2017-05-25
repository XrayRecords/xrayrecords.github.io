"use strict";

// create classes
var NavBar = React.createClass({
  displayName: "NavBar",

  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-inverse" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar-collapse", "aria-expanded": "false" },
            React.createElement(
              "span",
              { className: "sr-only" },
              "Toggle navigation"
            ),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          ),
          React.createElement(NavBrand, { linkTo: this.props.brand.linkTo, text: this.props.brand.text })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbar-collapse" },
          React.createElement(NavMenu, { links: this.props.links })
        )
      )
    );
  }
});

var NavBrand = React.createClass({
  displayName: "NavBrand",

  render: function render() {
    return React.createElement(
      "a",
      { className: "navbar-brand", href: this.props.linkTo },
      this.props.text
    );
  }
});

var NavMenu = React.createClass({
  displayName: "NavMenu",

  render: function render() {
    var links = this.props.links.map(function (link) {
      if (link.dropdown) {
        return React.createElement(NavLinkDropdown, { links: link.links, text: link.text });
      } else {
        return React.createElement(NavLink, { linkTo: link.linkTo, text: link.text });
      }
    });
    return React.createElement(
      "ul",
      { className: "nav navbar-nav" },
      links
    );
  }
});

var NavLinkDropdown = React.createClass({
  displayName: "NavLinkDropdown",

  render: function render() {
    var links = this.props.links.map(function (link) {
      return React.createElement(NavLink, { linkTo: link.linkTo, text: link.text });
    });
    return React.createElement(
      "li",
      { className: "dropdown" },
      React.createElement(
        "a",
        { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
        this.props.text,
        React.createElement("span", { className: "caret" })
      ),
      React.createElement(
        "ul",
        { className: "dropdown-menu" },
        links
      )
    );
  }
});

var NavLink = React.createClass({
  displayName: "NavLink",

  render: function render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: this.props.linkTo },
        this.props.text
      )
    );
  }
});

// set data
var navbar = {};
navbar.brand = { linkTo: "/xrayrecords.github.io/home.html", text: "XRAY Records" };
navbar.links = [
  { dropdown: true, text: "Artists", links: [
    { linkTo: "/xrayrecords.github.io/artists/deathlist.html", text: "Deathlist" },
    { linkTo: "/xrayrecords.github.io/artists/blesst-chest.html", text: "Blesst Chest" },
    { linkTo: "/xrayrecords.github.io/artists/heavy-breather.html", text: "Heavy Breather" },
    { linkTo: "/xrayrecords.github.io/artists/wl.html", text: "WL" },
    { linkTo: "/xrayrecords.github.io/artists/sun-angle.html", text: "Sun Angle" },
    { linkTo: "/xrayrecords.github.io/artists/secret-drum-band.html", text: "Secret Drum Band (coming soon)" }
      ]
  },
  { linkTo: "/xrayrecords.github.io/shop.html", text: "Shop" }
  ];

// render NavBar
React.render(React.createElement(NavBar, navbar), document.getElementById("navbar"));
