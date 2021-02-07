;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    151: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Card_Card
      })
      var react = __webpack_require__(0),
        styled_base_browser_esm = __webpack_require__(26),
        core_browser_esm = __webpack_require__(19),
        polished_esm = __webpack_require__(50),
        styles = __webpack_require__(4),
        bgColor = Object(polished_esm.b)(0.01, styles.b.base.white),
        bgColorHover = Object(polished_esm.c)(0.9, styles.b.theme.primary),
        borderColor = Object(polished_esm.b)(0.1, bgColor),
        hoverableStyles = Object(core_browser_esm.css)(
          'cursor:pointer;&:hover{background-color:',
          bgColorHover,
          ';};label:hoverableStyles;',
        ),
        StyledCard = Object(styled_base_browser_esm.a)('div', {
          target: 'e1jjqzks0',
          label: 'StyledCard',
        })(
          styles.c.light,
          ';background:',
          bgColor,
          ';border-radius:2px;border:solid 1px ',
          borderColor,
          ';padding:24px;transition:background-color 200ms ease;& + &{margin-top:8px;}',
          function (_ref) {
            return _ref.hoverable && hoverableStyles
          },
          ';',
        ),
        Card_Card = function Card(props) {
          return react.createElement(StyledCard, props, props.children)
        }
      Card_Card.displayName = 'Card'
      try {
        ;(Card_Card.displayName = 'Card'),
          (Card_Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              hoverable: {
                defaultValue: null,
                description: '',
                name: 'hoverable',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name:
                    '((event: MouseEvent<HTMLElement, MouseEvent>) => void)',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Card/Card.tsx#Card'] = {
              docgenInfo: Card_Card.__docgenInfo,
              name: 'Card',
              path: 'src/Card/Card.tsx#Card',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    1621: function (module, exports, __webpack_require__) {
      'use strict'
      __webpack_require__(5),
        __webpack_require__(58),
        __webpack_require__(44),
        __webpack_require__(36),
        __webpack_require__(46),
        __webpack_require__(1622),
        __webpack_require__(1623),
        __webpack_require__(9),
        __webpack_require__(45)
      var _clientApi = __webpack_require__(63),
        _clientLogger = __webpack_require__(38),
        _configFilename = __webpack_require__(2919)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                )
              })
        }
        return target
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      ;(_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({
            args: _configFilename.args,
            argTypes: _configFilename.argTypes,
          }),
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1)
          }),
        _configFilename.loaders &&
          _configFilename.loaders.forEach(function (loader) {
            return (0, _clientApi.addLoader)(loader, !1)
          }),
        (_configFilename.parameters ||
          _configFilename.globals ||
          _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              {
                globals: _configFilename.globals,
                globalTypes: _configFilename.globalTypes,
              },
            ),
            !1,
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer)
          })
    },
    1634: function (module, exports, __webpack_require__) {
      'use strict'
      ;(function (module) {
        ;(0, __webpack_require__(445).configure)(
          [__webpack_require__(1635)],
          module,
          !1,
        )
      }.call(this, __webpack_require__(56)(module)))
    },
    1635: function (module, exports, __webpack_require__) {
      var map = {
        './Alert/Alert.stories.tsx': 2921,
        './Button/Button.stories.tsx': 1636,
        './Card/Card.stories.tsx': 1637,
        './Loader/Loader.stories.tsx': 2922,
        './Toast/Toast/Toast.stories.tsx': 1638,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1635)
    },
    1636: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'BasicButtons', function () {
          return BasicButtons
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'DisabledButtons',
          function () {
            return DisabledButtons
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'BlockButtons', function () {
          return BlockButtons
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'LoaderButtons',
          function () {
            return LoaderButtons
          },
        )
      __webpack_require__(315), __webpack_require__(3)
      var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          81,
        ),
        _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          7,
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__,
        ),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52)
      __webpack_exports__.default = {
        argTypes: {
          children: { control: { disable: !0 } },
          onClick: { action: 'action' },
        },
        component: _Button__WEBPACK_IMPORTED_MODULE_6__.a,
        title: 'Components/Button',
      }
      var ButtonSet = function ButtonSet(args) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_6__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                { styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Primary },
              ),
              'Primary',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_6__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                {
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Secondary,
                },
              ),
              'Secondary',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_6__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                { styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Success },
              ),
              'Success',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_6__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                { styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Info },
              ),
              'Info',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_6__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                { styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Warning },
              ),
              'Warning',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_6__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                { styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Danger },
              ),
              'Danger',
            ),
          )
        },
        Template = function Template(args) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            ButtonSet,
            args,
          )
        }
      Template.displayName = 'Template'
      var BasicButtons = Template.bind({})
      BasicButtons.args = {}
      var DisabledButtons = Template.bind({})
      DisabledButtons.args = { disabled: !0 }
      var BlockButtons = function BlockButtons(args) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'h3',
              null,
              'Block Buttons',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              'Use the ',
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                'span',
                { className: 'code' },
                'block',
              ),
              ' prop to create a block-style button.',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              'Block-style buttons will fill the width of the container.',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  { block: !0 },
                  args,
                ),
                'Primary Block',
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              'If you want to have multiple block-style buttons fill together, simply make the container a flex container.',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  args,
                  {
                    block: !0,
                    styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Primary,
                  },
                ),
                'Primary Block',
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  args,
                  {
                    block: !0,
                    styleTheme:
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Secondary,
                  },
                ),
                'Secondary Block',
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  args,
                  {
                    block: !0,
                    styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Success,
                  },
                ),
                'Success Block',
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              { style: { display: 'flex', marginTop: 8 } },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  args,
                  {
                    block: !0,
                    disabled: !0,
                    styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Info,
                  },
                ),
                'Disabled Info Block',
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  args,
                  {
                    block: !0,
                    disabled: !0,
                    styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Warning,
                  },
                ),
                'Disabled Warning Block',
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  args,
                  {
                    block: !0,
                    disabled: !0,
                    styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Danger,
                  },
                ),
                'Disabled Danger Block',
              ),
            ),
          )
        },
        LoaderButtons = function LoaderButtons(args) {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(
              !0,
            ),
            _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(
              _React$useState,
              2,
            ),
            loading = _React$useState2[0],
            setLoading = _React$useState2[1]
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'h3',
              null,
              'Loader buttons',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              'Use the ',
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                'span',
                { className: 'code' },
                'loading',
              ),
              ' prop to show a loader in the button in place of its children.',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              'Loader buttons have native ',
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                'span',
                { className: 'code' },
                'disabled',
              ),
              ' state applied to them, so they cannot be interacted with until the',
              ' ',
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                'span',
                { className: 'code' },
                'loading',
              ),
              ' state is removed.',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              { style: { marginBottom: 16 } },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  onClick: function toggleLoading() {
                    return setLoading(function (prev) {
                      return !prev
                    })
                  },
                },
                'Toggle Loading',
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              ButtonSet,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                args,
                { showLoader: loading },
              ),
            ),
          )
        }
      ;(BasicButtons.parameters = Object.assign(
        { storySource: { source: '(args) => <ButtonSet {...args} />' } },
        BasicButtons.parameters,
      )),
        (DisabledButtons.parameters = Object.assign(
          { storySource: { source: '(args) => <ButtonSet {...args} />' } },
          DisabledButtons.parameters,
        )),
        (BlockButtons.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => (\n  <>\n    <h3>Block Buttons</h3>\n    <p>\n      Use the <span className=\"code\">block</span> prop to create a block-style\n      button.\n    </p>\n    <p>Block-style buttons will fill the width of the container.</p>\n    <div>\n      <Button block={true} {...args}>\n        Primary Block\n      </Button>\n    </div>\n\n    <p>\n      If you want to have multiple block-style buttons fill together, simply\n      make the container a flex container.\n    </p>\n\n    <div style={{ display: 'flex' }}>\n      <Button {...args} block={true} styleTheme={StyleTheme.Primary}>\n        Primary Block\n      </Button>\n      <Button {...args} block={true} styleTheme={StyleTheme.Secondary}>\n        Secondary Block\n      </Button>\n      <Button {...args} block={true} styleTheme={StyleTheme.Success}>\n        Success Block\n      </Button>\n    </div>\n\n    <div style={{ display: 'flex', marginTop: 8 }}>\n      <Button\n        {...args}\n        block={true}\n        disabled={true}\n        styleTheme={StyleTheme.Info}\n      >\n        Disabled Info Block\n      </Button>\n      <Button\n        {...args}\n        block={true}\n        disabled={true}\n        styleTheme={StyleTheme.Warning}\n      >\n        Disabled Warning Block\n      </Button>\n      <Button\n        {...args}\n        block={true}\n        disabled={true}\n        styleTheme={StyleTheme.Danger}\n      >\n        Disabled Danger Block\n      </Button>\n    </div>\n  </>\n)",
            },
          },
          BlockButtons.parameters,
        )),
        (LoaderButtons.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => {\n  const [loading, setLoading] = React.useState(true)\n  const toggleLoading = () => setLoading((prev) => !prev)\n\n  return (\n    <>\n      <h3>Loader buttons</h3>\n      <p>\n        Use the <span className="code">loading</span> prop to show a loader in\n        the button in place of its children.\n      </p>\n      <p>\n        Loader buttons have native <span className="code">disabled</span> state\n        applied to them, so they cannot be interacted with until the{\' \'}\n        <span className="code">loading</span> state is removed.\n      </p>\n\n      <div style={{ marginBottom: 16 }}>\n        <Button onClick={toggleLoading}>Toggle Loading</Button>\n      </div>\n\n      <ButtonSet {...args} showLoader={loading} />\n    </>\n  )\n}',
            },
          },
          LoaderButtons.parameters,
        ))
      try {
        ;(BlockButtons.displayName = 'BlockButtons'),
          (BlockButtons.__docgenInfo = {
            description:
              '************************************************\nBlock Buttons\n************************************************',
            displayName: 'BlockButtons',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Button/Button.stories.tsx#BlockButtons'
            ] = {
              docgenInfo: BlockButtons.__docgenInfo,
              name: 'BlockButtons',
              path: 'src/Button/Button.stories.tsx#BlockButtons',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(LoaderButtons.displayName = 'LoaderButtons'),
          (LoaderButtons.__docgenInfo = {
            description:
              '************************************************\nLoader Buttons\n************************************************',
            displayName: 'LoaderButtons',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Button/Button.stories.tsx#LoaderButtons'
            ] = {
              docgenInfo: LoaderButtons.__docgenInfo,
              name: 'LoaderButtons',
              path: 'src/Button/Button.stories.tsx#LoaderButtons',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    1637: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'BasicCard', function () {
          return BasicCard
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'HoverableCard',
          function () {
            return HoverableCard
          },
        )
      __webpack_require__(3)
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          7,
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          26,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          137,
        ),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82),
        _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(151)
      __webpack_exports__.default = {
        argTypes: {
          children: { control: { disable: !0 } },
          className: { control: { disable: !0 } },
        },
        component: _Card__WEBPACK_IMPORTED_MODULE_6__.a,
        title: 'Components/Card',
      }
      var CardTitle = Object(
          _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.a,
        )('h3', { target: 'e66wvgh0', label: 'CardTitle' })({
          name: 'jzk260',
          styles: 'font-size:1.25rem;font-weight:bold;margin:0.5rem 0;',
        }),
        BasicCard = function BasicCard(args) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            _Card__WEBPACK_IMPORTED_MODULE_6__.a,
            args,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              CardTitle,
              null,
              'This is a basic Card',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              'This is a paragraph within the card that has a lot of great information. If you were looking for great information, then you have come to the right place!',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              "But wait! Just when you thought the information couldn't get any more great, it does! Because this paragraph is even ",
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                'em',
                null,
                'more',
              ),
              ' full of great information!',
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'p',
              null,
              "This Card also has a Button in it, although in this case it doesn't actually do anything.",
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onClick: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action,
                )('Card button clicked!'),
              },
              'Thanks!',
            ),
          )
        }
      BasicCard.displayName = 'BasicCard'
      var HoverableCard = function HoverableCard(args) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _Card__WEBPACK_IMPORTED_MODULE_6__.a,
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
            {},
            args,
            {
              hoverable: !0,
              onClick: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action,
              )('Hoverable Card clicked!'),
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            CardTitle,
            null,
            'Hoverable/Clickable',
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'p',
            null,
            'Use the ',
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'span',
              { className: 'code' },
              'hoverable',
            ),
            ' prop to add a hover state to a Card. This combined with the ',
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'span',
              { className: 'code' },
              'onClick',
            ),
            ' ',
            'callback can be useful if you need to use a Card as a link.',
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'p',
            null,
            'This example will simply log the current date/time to your console when clicked.',
          ),
        )
      }
      ;(HoverableCard.displayName = 'HoverableCard'),
        (BasicCard.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => (\n  <Card {...args}>\n    <CardTitle>This is a basic Card</CardTitle>\n\n    <p>\n      This is a paragraph within the card that has a lot of great information.\n      If you were looking for great information, then you have come to the right\n      place!\n    </p>\n\n    <p>\n      But wait! Just when you thought the information couldn&apos;t get any more\n      great, it does! Because this paragraph is even <em>more</em> full of great\n      information!\n    </p>\n\n    <p>\n      This Card also has a Button in it, although in this case it doesn&apos;t\n      actually do anything.\n    </p>\n\n    <Button onClick={action('Card button clicked!')}>Thanks!</Button>\n  </Card>\n)",
            },
          },
          BasicCard.parameters,
        )),
        (HoverableCard.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Card {...args} hoverable={true} onClick={action(\'Hoverable Card clicked!\')}>\n    <CardTitle>Hoverable/Clickable</CardTitle>\n\n    <p>\n      Use the <span className="code">hoverable</span> prop to add a hover state\n      to a Card. This combined with the <span className="code">onClick</span>{\' \'}\n      callback can be useful if you need to use a Card as a link.\n    </p>\n\n    <p>\n      This example will simply log the current date/time to your console when\n      clicked.\n    </p>\n  </Card>\n)',
            },
          },
          HoverableCard.parameters,
        ))
    },
    1638: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'BasicToast', function () {
          return BasicToast
        })
      __webpack_require__(3)
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          7,
        ),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__,
        ),
        faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(262),
        faker__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          faker__WEBPACK_IMPORTED_MODULE_2__,
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82),
        _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        _ToastProvider_ToastProvider_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          268,
        ),
        _Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(263),
        lorem = faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem
      __webpack_exports__.default = {
        argTypes: { children: { control: { disable: !0 } } },
        component: _Toast__WEBPACK_IMPORTED_MODULE_7__.a,
        title: 'Components/Toast',
      }
      var getText = function getText() {
          return lorem.lines(Math.ceil(4 * Math.random()))
        },
        BasicToast = function BasicToast(args) {
          var showToast = Object(
              _ToastProvider_ToastProvider_context__WEBPACK_IMPORTED_MODULE_6__.b,
            )().showToast,
            showMeTheToast = function showMeTheToast(toastType) {
              showToast(
                Object.assign({}, args, {
                  msg: getText(),
                  toastType: toastType,
                }),
              )
            }
          return react__WEBPACK_IMPORTED_MODULE_3__.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
                {},
                args,
                {
                  onClick: function onClick() {
                    return showMeTheToast(
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Primary,
                    )
                  },
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Primary,
                },
              ),
              'Primary Toast',
            ),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
                {},
                args,
                {
                  onClick: function onClick() {
                    return showMeTheToast(
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Secondary,
                    )
                  },
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Secondary,
                },
              ),
              'Secondary Toast',
            ),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
                {},
                args,
                {
                  onClick: function onClick() {
                    return showMeTheToast(
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Success,
                    )
                  },
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Success,
                },
              ),
              'Success Toast',
            ),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
                {},
                args,
                {
                  onClick: function onClick() {
                    return showMeTheToast(
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Info,
                    )
                  },
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Info,
                },
              ),
              'Info Toast',
            ),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
                {},
                args,
                {
                  onClick: function onClick() {
                    return showMeTheToast(
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Warning,
                    )
                  },
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Warning,
                },
              ),
              'Warning Toast',
            ),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(
                {},
                args,
                {
                  onClick: function onClick() {
                    return showMeTheToast(
                      _styles__WEBPACK_IMPORTED_MODULE_5__.a.Danger,
                    )
                  },
                  styleTheme: _styles__WEBPACK_IMPORTED_MODULE_5__.a.Danger,
                },
              ),
              'Danger Toast',
            ),
          )
        }
      ;(BasicToast.displayName = 'BasicToast'),
        (BasicToast.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => {\n  const { showToast } = useToast()\n\n  const showMeTheToast = (toastType: StyleTheme) => {\n    showToast({\n      ...args,\n      msg: getText(),\n      toastType,\n    })\n  }\n\n  return (\n    <div>\n      <Button\n        {...args}\n        onClick={() => showMeTheToast(StyleTheme.Primary)}\n        styleTheme={StyleTheme.Primary}\n      >\n        Primary Toast\n      </Button>\n\n      <Button\n        {...args}\n        onClick={() => showMeTheToast(StyleTheme.Secondary)}\n        styleTheme={StyleTheme.Secondary}\n      >\n        Secondary Toast\n      </Button>\n\n      <Button\n        {...args}\n        onClick={() => showMeTheToast(StyleTheme.Success)}\n        styleTheme={StyleTheme.Success}\n      >\n        Success Toast\n      </Button>\n\n      <Button\n        {...args}\n        onClick={() => showMeTheToast(StyleTheme.Info)}\n        styleTheme={StyleTheme.Info}\n      >\n        Info Toast\n      </Button>\n\n      <Button\n        {...args}\n        onClick={() => showMeTheToast(StyleTheme.Warning)}\n        styleTheme={StyleTheme.Warning}\n      >\n        Warning Toast\n      </Button>\n\n      <Button\n        {...args}\n        onClick={() => showMeTheToast(StyleTheme.Danger)}\n        styleTheme={StyleTheme.Danger}\n      >\n        Danger Toast\n      </Button>\n    </div>\n  )\n}',
            },
          },
          BasicToast.parameters,
        ))
    },
    263: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Toast_Toast
      })
      __webpack_require__(229)
      var react = __webpack_require__(0),
        react_dom = __webpack_require__(150),
        styles = __webpack_require__(4),
        slicedToArray = (__webpack_require__(3), __webpack_require__(81)),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        styled_base_browser_esm = __webpack_require__(26),
        core_browser_esm = __webpack_require__(19),
        getPositions =
          (__webpack_require__(27),
          __webpack_require__(68),
          function getPositions(position) {
            return position.split('-')
          })
      var ToastTestIds,
        ToastContainer = Object(styled_base_browser_esm.a)('div', {
          target: 'e1ia8xwk0',
          label: 'ToastContainer',
        })(
          styles.c.light,
          ';background:white;border:solid #bbb 1px;border-top:',
          function (_ref) {
            var toastType = _ref.toastType
            return toastType
              ? 'solid '.concat(styles.b.theme[toastType], ' 4px')
              : 'solid #bbb 1px'
          },
          ';max-width:350px;padding:12px;position:fixed;transform:',
          function (_ref2) {
            var topOffset = _ref2.topOffset
            return 'translateY('.concat(topOffset, 'px)')
          },
          ';transition:transform 325ms ease;',
          function (_ref3) {
            return (function getMobilePositions(position) {
              var _getPositions3 = getPositions(position),
                y = slicedToArray_default()(_getPositions3, 1)[0],
                xStyles = Object(core_browser_esm.css)(
                  'left:',
                  '8px',
                  ';right:',
                  '8px',
                  ';;label:xStyles;',
                ),
                yStyles =
                  'top' === y
                    ? Object(core_browser_esm.css)(
                        'bottom:auto;top:',
                        '8px',
                        ';;label:yStyles;',
                      )
                    : Object(core_browser_esm.css)(
                        'bottom:',
                        '8px',
                        ';top:auto;;label:yStyles;',
                      )
              return Object(core_browser_esm.css)(
                Object.assign({}, xStyles),
                ';',
                Object.assign({}, yStyles),
                ';',
              )
            })(_ref3.position)
          },
          ';@media (min-width:600px){',
          function (_ref4) {
            return (function getDesktopPositions(position) {
              var _getPositions = getPositions(position),
                _getPositions2 = slicedToArray_default()(_getPositions, 2),
                y = _getPositions2[0],
                xStyles =
                  'right' === _getPositions2[1]
                    ? Object(core_browser_esm.css)(
                        'left:auto;right:',
                        '24px',
                        ';;label:xStyles;',
                      )
                    : Object(core_browser_esm.css)(
                        'left:',
                        '24px',
                        ';right:auto;;label:xStyles;',
                      ),
                yStyles =
                  'top' === y
                    ? Object(core_browser_esm.css)(
                        'top:',
                        '24px',
                        ';;label:yStyles;',
                      )
                    : Object(core_browser_esm.css)(
                        'bottom:',
                        '24px',
                        ';;label:yStyles;',
                      )
              return Object(core_browser_esm.css)(
                Object.assign({}, xStyles),
                ';',
                Object.assign({}, yStyles),
                ';',
              )
            })(_ref4.position)
          },
          ';}',
        ),
        ToastContent = Object(styled_base_browser_esm.a)('div', {
          target: 'e1ia8xwk1',
          label: 'ToastContent',
        })({
          name: '1r5ze87',
          styles:
            'align-items:center;display:flex;justify-content:space-between;position:relative;',
        }),
        CloseButton = Object(styled_base_browser_esm.a)('button', {
          target: 'e1ia8xwk2',
          label: 'CloseButton',
        })({
          name: '1au56g6',
          styles:
            "background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:none;cursor:pointer;height:1em;margin-left:8px;opacity:0.6;transition:opacity 100ms ease;width:1em;&:hover{opacity:0.85;}&:active{outline:none;}",
        })
      !(function (ToastTestIds) {
        ;(ToastTestIds.closeBtn = 'vs--Toast__closeBtn'),
          (ToastTestIds.container = 'vs--Toast__container')
      })(ToastTestIds || (ToastTestIds = {}))
      var Toast_Toast = function Toast(_ref) {
        var afterMeasure = _ref.afterMeasure,
          duration = _ref.duration,
          _ref$hideCloseButton = _ref.hideCloseButton,
          hideCloseButton =
            void 0 !== _ref$hideCloseButton && _ref$hideCloseButton,
          id = _ref.id,
          index = _ref.index,
          msg = _ref.msg,
          onClose = _ref.onClose,
          _ref$position = _ref.position,
          position = void 0 === _ref$position ? 'top-right' : _ref$position,
          _ref$renderContainer = _ref.renderContainer,
          renderContainer =
            void 0 === _ref$renderContainer
              ? document.body
              : _ref$renderContainer,
          _ref$toastType = _ref.toastType,
          toastType =
            void 0 === _ref$toastType ? styles.a.Info : _ref$toastType,
          verticalOffset = _ref.verticalOffset,
          ref = react.useRef(null),
          handleClose = react.useCallback(
            function () {
              onClose(id)
            },
            [id, onClose],
          )
        react.useEffect(
          function () {
            if (ref.current) {
              var _size = ref.current.offsetHeight
              afterMeasure(id, _size)
            }
          },
          [afterMeasure, id],
        ),
          react.useEffect(
            function () {
              var timeout = setTimeout(
                handleClose,
                null != duration ? duration : 5e3,
              )
              return function () {
                clearTimeout(timeout)
              }
            },
            [duration, handleClose],
          )
        var topOffset = react.useMemo(
          function () {
            var y = getPositions(position)[0],
              offset = verticalOffset + 8 * index
            return 'top' === y ? offset : -offset
          },
          [index, position, verticalOffset],
        )
        return react_dom.createPortal(
          react.createElement(
            ToastContainer,
            {
              'aria-atomic': 'true',
              'aria-live': 'assertive',
              'data-testid': ToastTestIds.container,
              position: position,
              ref: ref,
              role: 'alert',
              toastType: toastType,
              topOffset: topOffset,
            },
            react.createElement(
              ToastContent,
              null,
              react.createElement('span', null, msg),
              !hideCloseButton &&
                react.createElement(CloseButton, {
                  'aria-label': 'Close',
                  'data-testid': ToastTestIds.closeBtn,
                  onClick: handleClose,
                }),
            ),
          ),
          renderContainer,
        )
      }
      try {
        ;(Toast_Toast.displayName = 'Toast'),
          (Toast_Toast.__docgenInfo = {
            description: '',
            displayName: 'Toast',
            props: {
              duration: {
                defaultValue: null,
                description: '',
                name: 'duration',
                required: !1,
                type: { name: 'number' },
              },
              hideCloseButton: {
                defaultValue: { value: !1 },
                description: '',
                name: 'hideCloseButton',
                required: !1,
                type: { name: 'boolean' },
              },
              msg: {
                defaultValue: null,
                description: '',
                name: 'msg',
                required: !0,
                type: { name: 'string' },
              },
              position: {
                defaultValue: { value: 'top-right' },
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name:
                    '"top-left" | "bottom-left" | "top-right" | "bottom-right"',
                },
              },
              toastType: {
                defaultValue: { value: 'StyleTheme.Info' },
                description: '',
                name: 'toastType',
                required: !1,
                type: { name: 'StyleTheme' },
              },
              afterMeasure: {
                defaultValue: null,
                description: '',
                name: 'afterMeasure',
                required: !0,
                type: { name: '(id: string, size: number) => void' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              index: {
                defaultValue: null,
                description: '',
                name: 'index',
                required: !0,
                type: { name: 'number' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !0,
                type: { name: '(id: string) => void' },
              },
              renderContainer: {
                defaultValue: { value: 'document.body' },
                description: '',
                name: 'renderContainer',
                required: !1,
                type: { name: 'Element' },
              },
              verticalOffset: {
                defaultValue: null,
                description: '',
                name: 'verticalOffset',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Toast/Toast/Toast.tsx#Toast'] = {
              docgenInfo: Toast_Toast.__docgenInfo,
              name: 'Toast',
              path: 'src/Toast/Toast/Toast.tsx#Toast',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    268: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return ToastContext
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return useToast
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(269),
        ToastContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
          showToast: _utils__WEBPACK_IMPORTED_MODULE_1__.b,
        }),
        useToast = function useToast() {
          return react__WEBPACK_IMPORTED_MODULE_0__.useContext(ToastContext)
        }
    },
    269: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return arr
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return noop
        })
      __webpack_require__(28), __webpack_require__(15)
      function arr(len) {
        return len > 0 ? Array.from(Array(len)) : []
      }
      var noop = function noop() {}
    },
    2919: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'parameters', function () {
          return parameters
        }),
        __webpack_require__.d(__webpack_exports__, 'decorators', function () {
          return decorators
        })
      var ActionType,
        react = __webpack_require__(0),
        Toast = __webpack_require__(263),
        helpers_extends = (__webpack_require__(18), __webpack_require__(7)),
        extends_default = __webpack_require__.n(helpers_extends),
        objectWithoutProperties = __webpack_require__(267),
        objectWithoutProperties_default = __webpack_require__.n(
          objectWithoutProperties,
        ),
        slicedToArray = __webpack_require__(81),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        fp = __webpack_require__(83),
        ToastProvider_context = __webpack_require__(268),
        immer_esm = (__webpack_require__(3), __webpack_require__(641)),
        index_browser = __webpack_require__(642)
      !(function (ActionType) {
        ;(ActionType.AddSize = 'AddSize'),
          (ActionType.AddToast = 'AddToast'),
          (ActionType.DismissToast = 'DismissToast')
      })(ActionType || (ActionType = {}))
      var initialState = { toasts: [] },
        ToastProvider_reducer_reducer = function reducer(state, action) {
          return Object(immer_esm.a)(state, function (draft) {
            switch (action.type) {
              case ActionType.AddSize:
                var id = action.id,
                  size = action.size,
                  idx = Object(fp.findIndex)(Object(fp.propEq)('id', id))(
                    state.toasts,
                  )
                if (-1 === idx) return
                return void (draft.toasts[idx].size = size)
              case ActionType.AddToast:
                var newToastId = action.id,
                  props = action.props
                return void draft.toasts.push(
                  Object.assign(
                    {
                      id:
                        null != newToastId
                          ? newToastId
                          : Object(index_browser.a)(),
                      size: 0,
                    },
                    props,
                  ),
                )
              case ActionType.DismissToast:
                var _id = action.id,
                  dismissToastById = Object(fp.reject)(
                    Object(fp.propEq)('id', _id),
                  )
                return void (draft.toasts = dismissToastById(state.toasts))
              default:
                return
            }
          })
        },
        sumOfListHeight = Object(fp.pipe)(
          Object(fp.map)(Object(fp.prop)('size')),
          fp.sum,
        ),
        ToastProvider_ToastProvider = function ToastProvider(_ref) {
          var children = _ref.children,
            _React$useReducer = react.useReducer(
              ToastProvider_reducer_reducer,
              initialState,
            ),
            _React$useReducer2 = slicedToArray_default()(_React$useReducer, 2),
            state = _React$useReducer2[0],
            dispatch = _React$useReducer2[1],
            showToast = react.useCallback(function (props) {
              dispatch({ props: props, type: ActionType.AddToast })
            }, []),
            handleToastMeasured = react.useCallback(function (id, size) {
              dispatch({ id: id, size: size, type: ActionType.AddSize })
            }, []),
            handleToastClosed = react.useCallback(function (id) {
              dispatch({ id: id, type: ActionType.DismissToast })
            }, []),
            contextValue = react.useMemo(
              function () {
                return { showToast: showToast }
              },
              [showToast],
            )
          return react.createElement(
            ToastProvider_context.a.Provider,
            { value: contextValue },
            children,
            state.toasts.map(function (_ref2, index) {
              var id = _ref2.id,
                props = objectWithoutProperties_default()(_ref2, ['id']),
                verticalOffset = sumOfListHeight(
                  Object(fp.take)(index, state.toasts),
                )
              return react.createElement(
                Toast.a,
                extends_default()(
                  {
                    afterMeasure: handleToastMeasured,
                    id: id,
                    index: index,
                    key: id,
                    onClose: handleToastClosed,
                    verticalOffset: verticalOffset,
                  },
                  props,
                ),
              )
            }),
          )
        }
      ToastProvider_ToastProvider.displayName = 'ToastProvider'
      try {
        ;(ToastProvider_ToastProvider.displayName = 'ToastProvider'),
          (ToastProvider_ToastProvider.__docgenInfo = {
            description: '',
            displayName: 'ToastProvider',
            props: {
              renderContainer: {
                defaultValue: null,
                description: '',
                name: 'renderContainer',
                required: !1,
                type: { name: 'Element' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Toast/ToastProvider/ToastProvider.tsx#ToastProvider'
            ] = {
              docgenInfo: ToastProvider_ToastProvider.__docgenInfo,
              name: 'ToastProvider',
              path: 'src/Toast/ToastProvider/ToastProvider.tsx#ToastProvider',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var parameters = {},
        decorators = [
          function (Story) {
            return react.createElement(
              react.Fragment,
              null,
              react.createElement(
                ToastProvider_ToastProvider,
                null,
                react.createElement(Story, null),
              ),
            )
          },
        ]
    },
    2921: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'BasicAlerts', function () {
          return Alert_stories_BasicAlerts
        }),
        __webpack_require__.d(__webpack_exports__, 'Dismissable', function () {
          return Alert_stories_Dismissable
        })
      __webpack_require__(3)
      var helpers_extends = __webpack_require__(7),
        extends_default = __webpack_require__.n(helpers_extends),
        styled_base_browser_esm = __webpack_require__(26),
        dist = __webpack_require__(137),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styles = __webpack_require__(4),
        slicedToArray = (__webpack_require__(229), __webpack_require__(81)),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        core_browser_esm = __webpack_require__(19),
        polished_esm = __webpack_require__(50)
      var AlertContainer = Object(styled_base_browser_esm.a)('div', {
          target: 'e1ka1lso0',
          label: 'AlertContainer',
        })(
          'border-radius:0.25rem;margin-bottom:1.5rem;margin-top:0;padding:1rem;position:relative;',
          function (_ref) {
            var dismissed = _ref.dismissed,
              transitionTime = _ref.transitionTime,
              styleTheme = _ref.styleTheme,
              baseColor = styles.b.theme[styleTheme],
              backgroundColor = Object(polished_esm.c)(0.75, baseColor),
              borderColor = Object(polished_esm.a)(0.035, backgroundColor),
              textColor = Object(polished_esm.a)(0.3, baseColor)
            return Object(core_browser_esm.css)(
              'background:',
              backgroundColor,
              ';border:1px solid ',
              borderColor,
              ';color:',
              textColor,
              ';opacity:',
              dismissed ? 0 : 1,
              ';transition:opacity ',
              transitionTime,
              'ms ease;;label:AlertContainer;',
            )
          },
          '',
        ),
        AlertContent = Object(styled_base_browser_esm.a)('div', {
          target: 'e1ka1lso1',
          label: 'AlertContent',
        })({ name: '3x388n', styles: 'max-width:calc(100% - 2.5rem);' }),
        CloseButtonWrapper = Object(styled_base_browser_esm.a)('div', {
          target: 'e1ka1lso2',
          label: 'CloseButtonWrapper',
        })({
          name: '1ab0rjo',
          styles:
            'align-items:center;background:transparent;display:flex;height:100%;justify-content:center;padding:0 1.25rem;position:absolute;right:0;top:0;',
        }),
        CloseButton = Object(styled_base_browser_esm.a)('button', {
          target: 'e1ka1lso3',
          label: 'CloseButton',
        })({
          name: '1u5zfdc',
          styles:
            'background:transparent;border:none;color:inherit;cursor:pointer;font-size:1.5rem;padding:0 6px;transition:all 200ms ease;&:hover{background:rgba(255,255,255,0.3);}',
        }),
        getAlertTestId = function getAlertTestId(type) {
          return 'vs-alert--'.concat(type)
        },
        getCloseBtnTestId = function getCloseBtnTestId(type) {
          return ''.concat(getAlertTestId(type), '__closeBtn')
        },
        Alert = react.memo(function (_ref) {
          var children = _ref.children,
            onDismiss = _ref.onDismiss,
            _ref$styleTheme = _ref.styleTheme,
            styleTheme =
              void 0 === _ref$styleTheme ? styles.a.Primary : _ref$styleTheme,
            _ref$transitionTime = _ref.transitionTime,
            transitionTime =
              void 0 === _ref$transitionTime ? 250 : _ref$transitionTime,
            _React$useState = react.useState({ dismissed: !1, showing: !0 }),
            _React$useState2 = slicedToArray_default()(_React$useState, 2),
            state = _React$useState2[0],
            setState = _React$useState2[1],
            handleCloseClick = react.useCallback(
              function () {
                onDismiss &&
                  (setState(function (prev) {
                    return Object.assign({}, prev, { dismissed: !0 })
                  }),
                  setTimeout(function () {
                    setState(function (prev) {
                      return Object.assign({}, prev, { showing: !1 })
                    }),
                      onDismiss()
                  }, transitionTime))
              },
              [onDismiss, transitionTime],
            )
          return state.showing
            ? react.createElement(
                AlertContainer,
                extends_default()(
                  {
                    'data-testid': getAlertTestId(styleTheme),
                    role: 'alert',
                    styleTheme: styleTheme,
                    transitionTime: transitionTime,
                  },
                  state,
                ),
                react.createElement(AlertContent, null, children),
                onDismiss &&
                  react.createElement(
                    CloseButtonWrapper,
                    null,
                    react.createElement(
                      CloseButton,
                      {
                        'aria-label': 'Close Alert',
                        'data-testid': getCloseBtnTestId(styleTheme),
                        onClick: handleCloseClick,
                      },
                      react.createElement(
                        'span',
                        { 'aria-hidden': 'true' },
                        '×',
                      ),
                    ),
                  ),
              )
            : null
        })
      try {
        ;(getAlertTestId.displayName = 'getAlertTestId'),
          (getAlertTestId.__docgenInfo = {
            description: '',
            displayName: 'getAlertTestId',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Alert/Alert.tsx#getAlertTestId'] = {
              docgenInfo: getAlertTestId.__docgenInfo,
              name: 'getAlertTestId',
              path: 'src/Alert/Alert.tsx#getAlertTestId',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(getCloseBtnTestId.displayName = 'getCloseBtnTestId'),
          (getCloseBtnTestId.__docgenInfo = {
            description: '',
            displayName: 'getCloseBtnTestId',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Alert/Alert.tsx#getCloseBtnTestId'
            ] = {
              docgenInfo: getCloseBtnTestId.__docgenInfo,
              name: 'getCloseBtnTestId',
              path: 'src/Alert/Alert.tsx#getCloseBtnTestId',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Alert.displayName = 'Alert'),
          (Alert.__docgenInfo = {
            description: '',
            displayName: 'Alert',
            props: {
              onDismiss: {
                defaultValue: null,
                description: '',
                name: 'onDismiss',
                required: !1,
                type: { name: '(() => void)' },
              },
              styleTheme: {
                defaultValue: null,
                description: '',
                name: 'styleTheme',
                required: !1,
                type: { name: 'StyleTheme' },
              },
              transitionTime: {
                defaultValue: null,
                description: '',
                name: 'transitionTime',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Alert/Alert.tsx#Alert'] = {
              docgenInfo: Alert.__docgenInfo,
              name: 'Alert',
              path: 'src/Alert/Alert.tsx#Alert',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        argTypes: { children: { control: { disable: !0 } } },
        component: Alert,
        title: 'Components/Alert',
      }
      var Header = Object(styled_base_browser_esm.a)('div', {
          target: 'e1n8v600',
          label: 'Header',
        })({ name: '1qm1lh', styles: 'margin-bottom:16px;' }),
        Alert_stories_BasicAlerts = function BasicAlerts(args) {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              Header,
              null,
              'Basic Alerts, which can display any kind of React children you need (usually just text). By default, they are permanent, but you can make them dismissable with the ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'dismissable',
              ),
              ' prop (see the next example).',
            ),
            react_default.a.createElement(
              Alert,
              extends_default()({}, args, { styleTheme: styles.a.Primary }),
              'This is a Primary alert, which is the default type if no other type is specified.',
            ),
            react_default.a.createElement(
              Alert,
              extends_default()({}, args, { styleTheme: styles.a.Secondary }),
              'This is a Secondary alert.',
            ),
            react_default.a.createElement(
              Alert,
              extends_default()({}, args, { styleTheme: styles.a.Info }),
              'This is an Info alert. Nothing serious here. Just letting you know.',
            ),
            react_default.a.createElement(
              Alert,
              extends_default()({}, args, { styleTheme: styles.a.Warning }),
              'This is a Warning alert. You should ',
              react_default.a.createElement('em', null, 'maybe'),
              ' take this information seriously.',
            ),
            react_default.a.createElement(
              Alert,
              extends_default()({}, args, { styleTheme: styles.a.Danger }),
              'This is a Danger alert. This is very serious business!',
            ),
          )
        },
        Alert_stories_Dismissable = function Dismissable(args) {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              Header,
              null,
              'This Alert is dismissable! You can see it has a button on the right, which will call the ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'onDismiss',
              ),
              ' callback after it has fully transitioned out.',
            ),
            react_default.a.createElement(
              Alert,
              extends_default()({}, args, {
                onDismiss: Object(dist.action)('Alert Dismissed!'),
              }),
              react_default.a.createElement(
                'span',
                null,
                'This Alert will go away when you click the button.',
              ),
            ),
            react_default.a.createElement(
              'p',
              null,
              'And this is some more stuff underneath the Alert. It will move back into place once the Alert is dismissed.',
            ),
          )
        }
      ;(Alert_stories_BasicAlerts.parameters = Object.assign(
        {
          storySource: {
            source:
              '(args) => (\n  <>\n    <Header>\n      Basic Alerts, which can display any kind of React children you need\n      (usually just text). By default, they are permanent, but you can make them\n      dismissable with the <span className="code">dismissable</span> prop (see\n      the next example).\n    </Header>\n\n    <Alert {...args} styleTheme={StyleTheme.Primary}>\n      This is a Primary alert, which is the default type if no other type is\n      specified.\n    </Alert>\n    <Alert {...args} styleTheme={StyleTheme.Secondary}>\n      This is a Secondary alert.\n    </Alert>\n    <Alert {...args} styleTheme={StyleTheme.Info}>\n      This is an Info alert. Nothing serious here. Just letting you know.\n    </Alert>\n    <Alert {...args} styleTheme={StyleTheme.Warning}>\n      This is a Warning alert. You should <em>maybe</em> take this information\n      seriously.\n    </Alert>\n    <Alert {...args} styleTheme={StyleTheme.Danger}>\n      This is a Danger alert. This is very serious business!\n    </Alert>\n  </>\n)',
          },
        },
        Alert_stories_BasicAlerts.parameters,
      )),
        (Alert_stories_Dismissable.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <>\n    <Header>\n      This Alert is dismissable! You can see it has a button on the right, which\n      will call the <span className="code">onDismiss</span> callback after it\n      has fully transitioned out.\n    </Header>\n\n    <Alert {...args} onDismiss={action(\'Alert Dismissed!\')}>\n      <span>This Alert will go away when you click the button.</span>\n    </Alert>\n\n    <p>\n      And this is some more stuff underneath the Alert. It will move back into\n      place once the Alert is dismissed.\n    </p>\n  </>\n)',
            },
          },
          Alert_stories_Dismissable.parameters,
        ))
    },
    2922: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'BasicLoaders', function () {
          return Loader_stories_BasicLoaders
        }),
        __webpack_require__.d(__webpack_exports__, 'OtherShapes', function () {
          return Loader_stories_OtherShapes
        }),
        __webpack_require__.d(__webpack_exports__, 'ChangingSize', function () {
          return Loader_stories_ChangingSize
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'ChangingInnerSize',
          function () {
            return Loader_stories_ChangingInnerSize
          },
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'OverlayLoader',
          function () {
            return Loader_stories_OverlayLoader
          },
        )
      __webpack_require__(3)
      var slicedToArray = __webpack_require__(81),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        helpers_extends = __webpack_require__(7),
        extends_default = __webpack_require__.n(helpers_extends),
        styled_base_browser_esm = __webpack_require__(26),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Button = __webpack_require__(82),
        Card = __webpack_require__(151),
        styles = __webpack_require__(4),
        Loader = __webpack_require__(31)
      __webpack_exports__.default = {
        argTypes: {
          children: { control: { disable: !0 } },
          onClick: { action: 'action' },
        },
        component: Loader.a,
        title: 'Components/Loader',
      }
      var Spacer = Object(styled_base_browser_esm.a)('span', {
          target: 'eickajk0',
          label: 'Spacer',
        })({ name: '1isemmb', styles: 'margin-left:8px;' }),
        Loader_stories_BasicLoaders = function BasicLoaders(args) {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement('h3', null, 'Basic Loaders'),
            react_default.a.createElement(
              'p',
              null,
              'DualRing loaders in each theme with default sizing. By default, Loaders will use ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'inline-flex',
              ),
              ' positioning, but you can change this behavior with the ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'overlay',
              ),
              ' ',
              'prop. (See the other example.)',
            ),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, { styleTheme: styles.a.Primary }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, { styleTheme: styles.a.Secondary }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, { styleTheme: styles.a.Success }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, { styleTheme: styles.a.Info }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, { styleTheme: styles.a.Warning }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, { styleTheme: styles.a.Danger }),
            ),
          )
        },
        Loader_stories_OtherShapes = function OtherShapes(args) {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement('h3', null, 'Other shapes'),
            react_default.a.createElement(
              'p',
              null,
              'Use the ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'shape',
              ),
              ' prop along with the',
              ' ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'LoaderShape',
              ),
              'enum to specify a Loader shape.',
            ),
            react_default.a.createElement(
              'p',
              null,
              'All Loaders support the same set of props, although in certain cases, some props may behave slightly differently in order to ensure the Loader renders in a sane way.',
            ),
            react_default.a.createElement('p', null, 'In order shown:'),
            react_default.a.createElement(
              'ul',
              null,
              react_default.a.createElement(
                'li',
                null,
                react_default.a.createElement(
                  'span',
                  { className: 'code' },
                  'DualRing',
                ),
                ' (',
                react_default.a.createElement('strong', null, 'Primary'),
                ' style)',
              ),
              react_default.a.createElement(
                'li',
                null,
                react_default.a.createElement(
                  'span',
                  { className: 'code' },
                  'SingleRing',
                ),
                ' (',
                react_default.a.createElement('strong', null, 'Secondary'),
                ' ',
                'style)',
              ),
              react_default.a.createElement(
                'li',
                null,
                react_default.a.createElement(
                  'span',
                  { className: 'code' },
                  'Ellipsis',
                ),
                ' (',
                react_default.a.createElement('strong', null, 'Success'),
                ' style)',
              ),
              react_default.a.createElement(
                'li',
                null,
                react_default.a.createElement(
                  'span',
                  { className: 'code' },
                  'Grid',
                ),
                ' (',
                react_default.a.createElement('strong', null, 'Warning'),
                ' style)',
              ),
            ),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                loaderShape: Loader.b.DualRing,
                styleTheme: styles.a.Primary,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                loaderShape: Loader.b.SingleRing,
                styleTheme: styles.a.Secondary,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                loaderShape: Loader.b.Ellipsis,
                styleTheme: styles.a.Success,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                loaderShape: Loader.b.Grid,
                styleTheme: styles.a.Warning,
              }),
            ),
          )
        }
      Loader_stories_OtherShapes.displayName = 'OtherShapes'
      var Loader_stories_ChangingSize = function ChangingSize(args) {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement('h3', null, 'Different Sizes'),
            react_default.a.createElement(
              'p',
              null,
              'Use the ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'size',
              ),
              ' prop to change the overall size of the Loader.',
            ),
            react_default.a.createElement(
              'p',
              null,
              'This example shows sizes 16-56 in increments of 8.',
            ),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                styleTheme: styles.a.Primary,
                loaderSize: 16,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                styleTheme: styles.a.Secondary,
                loaderSize: 24,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                styleTheme: styles.a.Success,
                loaderSize: 32,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                styleTheme: styles.a.Info,
                loaderSize: 40,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                styleTheme: styles.a.Warning,
                loaderSize: 48,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                styleTheme: styles.a.Danger,
                loaderSize: 56,
              }),
            ),
          )
        },
        Loader_stories_ChangingInnerSize = function ChangingInnerSize(args) {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement('h3', null, 'Changing Inner Size'),
            react_default.a.createElement(
              'p',
              null,
              'Use the optional ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'innerSize',
              ),
              ' prop to change how the Loader itself is rendered. This will have different effects depending on the Loader type. This can be useful if you want to change the way the Loader sizes itself (e.g. smaller elements on a large Loader, or vice-versa).',
            ),
            react_default.a.createElement(
              'p',
              null,
              'If this is left blank, the Loader will try to set this value in a sane way based on the wrapper size. In most cases, you are probably safe using the default.',
            ),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                innerSize: 5,
                styleTheme: styles.a.Primary,
                loaderSize: 20,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                innerSize: 3,
                styleTheme: styles.a.Success,
                loaderSize: 40,
              }),
            ),
            react_default.a.createElement(Spacer, null),
            react_default.a.createElement(
              Loader.a,
              extends_default()({}, args, {
                innerSize: 2,
                styleTheme: styles.a.Info,
                loaderSize: 60,
              }),
            ),
          )
        },
        RelativeCard = Object(styled_base_browser_esm.a)(Card.a, {
          target: 'eickajk1',
          label: 'RelativeCard',
        })({ name: '1od93p9', styles: 'margin-top:16px;position:relative;' }),
        OverlayTitle = Object(styled_base_browser_esm.a)('div', {
          target: 'eickajk2',
          label: 'OverlayTitle',
        })({
          name: '81j7wb',
          styles: 'font-size:1.25rem;font-weight:500;margin-bottom:0.5rem;',
        }),
        Loader_stories_OverlayLoader = function OverlayLoader(args) {
          var _React$useState = react_default.a.useState(!0),
            _React$useState2 = slicedToArray_default()(_React$useState, 2),
            loading = _React$useState2[0],
            setLoading = _React$useState2[1]
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement('h3', null, 'Overlay Loader'),
            react_default.a.createElement(
              'p',
              null,
              'Use the ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'overlay',
              ),
              ' prop to tell a Loader to fill the parent container and render with a semi-transparent backdrop. This is useful, for example, for covering a form while a network request is pending.',
            ),
            react_default.a.createElement(
              'p',
              null,
              'In order for this to work properly, the Loader must be within a parent with ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'relative',
              ),
              ' positioning. This will be the parent element that the Loader will fill. (In the example below, the Card component has ',
              react_default.a.createElement(
                'span',
                { className: 'code' },
                'relative',
              ),
              ' positioning applied to it.',
            ),
            react_default.a.createElement(
              Button.a,
              {
                onClick: function toggleLoading() {
                  return setLoading(function (prev) {
                    return !prev
                  })
                },
              },
              'Toggle Loader',
            ),
            react_default.a.createElement(
              RelativeCard,
              null,
              react_default.a.createElement(
                OverlayTitle,
                null,
                'This is a Card with an overlay Loader',
              ),
              react_default.a.createElement(
                'p',
                null,
                "You can see very clearly that the Loader expands to fill the parent and places a backdrop between itself and the parent's content.",
              ),
              loading &&
                react_default.a.createElement(
                  Loader.a,
                  extends_default()({}, args, { overlay: !0, loaderSize: 56 }),
                ),
            ),
          )
        }
      ;(Loader_stories_OverlayLoader.displayName = 'OverlayLoader'),
        (Loader_stories_BasicLoaders.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <>\n    <h3>Basic Loaders</h3>\n    <p>\n      DualRing loaders in each theme with default sizing. By default, Loaders\n      will use <span className="code">inline-flex</span> positioning, but you\n      can change this behavior with the <span className="code">overlay</span>{\' \'}\n      prop. (See the other example.)\n    </p>\n\n    <Loader {...args} styleTheme={StyleTheme.Primary} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Secondary} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Success} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Info} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Warning} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Danger} />\n  </>\n)',
            },
          },
          Loader_stories_BasicLoaders.parameters,
        )),
        (Loader_stories_OtherShapes.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <div>\n    <h3>Other shapes</h3>\n    <p>\n      Use the <span className="code">shape</span> prop along with the{\' \'}\n      <span className="code">LoaderShape</span>enum to specify a Loader shape.\n    </p>\n\n    <p>\n      All Loaders support the same set of props, although in certain cases, some\n      props may behave slightly differently in order to ensure the Loader\n      renders in a sane way.\n    </p>\n\n    <p>In order shown:</p>\n    <ul>\n      <li>\n        <span className="code">DualRing</span> (<strong>Primary</strong> style)\n      </li>\n      <li>\n        <span className="code">SingleRing</span> (<strong>Secondary</strong>{\' \'}\n        style)\n      </li>\n      <li>\n        <span className="code">Ellipsis</span> (<strong>Success</strong> style)\n      </li>\n      <li>\n        <span className="code">Grid</span> (<strong>Warning</strong> style)\n      </li>\n    </ul>\n\n    <Loader\n      {...args}\n      loaderShape={LoaderShape.DualRing}\n      styleTheme={StyleTheme.Primary}\n    />\n    <Spacer />\n    <Loader\n      {...args}\n      loaderShape={LoaderShape.SingleRing}\n      styleTheme={StyleTheme.Secondary}\n    />\n    <Spacer />\n    <Loader\n      {...args}\n      loaderShape={LoaderShape.Ellipsis}\n      styleTheme={StyleTheme.Success}\n    />\n    <Spacer />\n    <Loader\n      {...args}\n      loaderShape={LoaderShape.Grid}\n      styleTheme={StyleTheme.Warning}\n    />\n  </div>\n)',
            },
          },
          Loader_stories_OtherShapes.parameters,
        )),
        (Loader_stories_ChangingSize.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <>\n    <h3>Different Sizes</h3>\n    <p>\n      Use the <span className="code">size</span> prop to change the overall size\n      of the Loader.\n    </p>\n    <p>This example shows sizes 16-56 in increments of 8.</p>\n    <Loader {...args} styleTheme={StyleTheme.Primary} loaderSize={16} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Secondary} loaderSize={24} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Success} loaderSize={32} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Info} loaderSize={40} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Warning} loaderSize={48} />\n    <Spacer />\n    <Loader {...args} styleTheme={StyleTheme.Danger} loaderSize={56} />\n  </>\n)',
            },
          },
          Loader_stories_ChangingSize.parameters,
        )),
        (Loader_stories_ChangingInnerSize.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <>\n    <h3>Changing Inner Size</h3>\n    <p>\n      Use the optional <span className="code">innerSize</span> prop to change\n      how the Loader itself is rendered. This will have different effects\n      depending on the Loader type. This can be useful if you want to change the\n      way the Loader sizes itself (e.g. smaller elements on a large Loader, or\n      vice-versa).\n    </p>\n    <p>\n      If this is left blank, the Loader will try to set this value in a sane way\n      based on the wrapper size. In most cases, you are probably safe using the\n      default.\n    </p>\n    <Loader\n      {...args}\n      innerSize={5}\n      styleTheme={StyleTheme.Primary}\n      loaderSize={20}\n    />\n    <Spacer />\n    <Loader\n      {...args}\n      innerSize={3}\n      styleTheme={StyleTheme.Success}\n      loaderSize={40}\n    />\n    <Spacer />\n    <Loader\n      {...args}\n      innerSize={2}\n      styleTheme={StyleTheme.Info}\n      loaderSize={60}\n    />\n  </>\n)',
            },
          },
          Loader_stories_ChangingInnerSize.parameters,
        )),
        (Loader_stories_OverlayLoader.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => {\n  const [loading, setLoading] = React.useState(true)\n  const toggleLoading = () => setLoading((prev) => !prev)\n\n  return (\n    <div>\n      <h3>Overlay Loader</h3>\n      <p>\n        Use the <span className="code">overlay</span> prop to tell a Loader to\n        fill the parent container and render with a semi-transparent backdrop.\n        This is useful, for example, for covering a form while a network request\n        is pending.\n      </p>\n      <p>\n        In order for this to work properly, the Loader must be within a parent\n        with <span className="code">relative</span> positioning. This will be\n        the parent element that the Loader will fill. (In the example below, the\n        Card component has <span className="code">relative</span> positioning\n        applied to it.\n      </p>\n\n      <Button onClick={toggleLoading}>Toggle Loader</Button>\n\n      <RelativeCard>\n        <OverlayTitle>This is a Card with an overlay Loader</OverlayTitle>\n        <p>\n          You can see very clearly that the Loader expands to fill the parent\n          and places a backdrop between itself and the parent&apos;s content.\n        </p>\n        {loading && <Loader {...args} overlay={true} loaderSize={56} />}\n      </RelativeCard>\n    </div>\n  )\n}',
            },
          },
          Loader_stories_OverlayLoader.parameters,
        ))
      try {
        ;(Loader_stories_ChangingSize.displayName = 'ChangingSize'),
          (Loader_stories_ChangingSize.__docgenInfo = {
            description:
              '************************************************\nSizing Examples\n************************************************',
            displayName: 'ChangingSize',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Loader/Loader.stories.tsx#ChangingSize'
            ] = {
              docgenInfo: Loader_stories_ChangingSize.__docgenInfo,
              name: 'ChangingSize',
              path: 'src/Loader/Loader.stories.tsx#ChangingSize',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Loader_stories_ChangingInnerSize.displayName = 'ChangingInnerSize'),
          (Loader_stories_ChangingInnerSize.__docgenInfo = {
            description: '',
            displayName: 'ChangingInnerSize',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Loader/Loader.stories.tsx#ChangingInnerSize'
            ] = {
              docgenInfo: Loader_stories_ChangingInnerSize.__docgenInfo,
              name: 'ChangingInnerSize',
              path: 'src/Loader/Loader.stories.tsx#ChangingInnerSize',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;(Loader_stories_OverlayLoader.displayName = 'OverlayLoader'),
          (Loader_stories_OverlayLoader.__docgenInfo = {
            description: '',
            displayName: 'OverlayLoader',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Loader/Loader.stories.tsx#OverlayLoader'
            ] = {
              docgenInfo: Loader_stories_OverlayLoader.__docgenInfo,
              name: 'OverlayLoader',
              path: 'src/Loader/Loader.stories.tsx#OverlayLoader',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    31: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return LoaderShape
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return Loader
        })
      __webpack_require__(18), __webpack_require__(3)
      var helpers_extends = __webpack_require__(7),
        extends_default = __webpack_require__.n(helpers_extends),
        defineProperty = __webpack_require__(47),
        defineProperty_default = __webpack_require__.n(defineProperty),
        react = __webpack_require__(0),
        styles = __webpack_require__(4),
        utils = __webpack_require__(269),
        styled_base_browser_esm = __webpack_require__(26),
        core_browser_esm = __webpack_require__(19),
        polished_esm = __webpack_require__(50)
      var containerStyles = {
          name: 'wqn3d7-containerStyles',
          styles:
            'align-items:center;display:inline-flex;justify-content:center;;label:containerStyles;',
        },
        overlayContainerStyles = {
          name: '1k9cdiv-overlayContainerStyles',
          styles:
            'align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;;label:overlayContainerStyles;',
        },
        Container = Object(styled_base_browser_esm.a)('div', {
          target: 'ecqc3ke0',
          label: 'Container',
        })(function (_ref) {
          return _ref.overlay ? overlayContainerStyles : containerStyles
        }, ';'),
        Overlay = Object(styled_base_browser_esm.a)('div', {
          target: 'ecqc3ke1',
          label: 'Overlay',
        })(
          'background:',
          Object(polished_esm.d)(0.5, 'white'),
          ';height:100%;position:absolute;width:100%;',
        ),
        LoaderWrapper = Object(styled_base_browser_esm.a)('div', {
          target: 'ecqc3ke2',
          label: 'LoaderWrapper',
        })(
          'display:inline-block;height:',
          function (_ref2) {
            return _ref2.loaderSize
          },
          'px;width:',
          function (_ref3) {
            return _ref3.loaderSize
          },
          'px;',
        ),
        taggedTemplateLiteral = __webpack_require__(90),
        taggedTemplateLiteral_default = __webpack_require__.n(
          taggedTemplateLiteral,
        )
      function _templateObject() {
        var data = taggedTemplateLiteral_default()([
          '\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n',
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var anim = Object(core_browser_esm.keyframes)(_templateObject()),
        DualRing = Object(styled_base_browser_esm.a)('div', {
          target: 'eqp4azm0',
          label: 'DualRing',
        })(
          'height:100%;width:100%;',
          function (props) {
            var _props$baseColor,
              _props$innerSize,
              _props$speed,
              color1 =
                null !== (_props$baseColor = props.baseColor) &&
                void 0 !== _props$baseColor
                  ? _props$baseColor
                  : styles.b.theme[props.styleTheme],
              color2 = Object(polished_esm.d)(0.6, color1),
              size =
                null !== (_props$innerSize = props.innerSize) &&
                void 0 !== _props$innerSize
                  ? _props$innerSize
                  : (function defaultInnerSize(loaderSize) {
                      return Math.max(Math.round(0.1 * loaderSize), 1)
                    })(props.loaderSize),
              speed =
                null !== (_props$speed = props.speed) && void 0 !== _props$speed
                  ? _props$speed
                  : 1e3
            return Object(core_browser_esm.css)(
              '&:after{animation:',
              anim,
              ' ',
              speed,
              'ms linear infinite;border:',
              size,
              'px solid #fff;border-color:',
              color1,
              ' ',
              color2,
              ";border-radius:50%;content:' ';display:block;height:calc(100% - ",
              size,
              'px * 2);width:calc(100% - ',
              size,
              'px * 2);};label:DualRing;',
            )
          },
          '',
        )
      function _templateObject3() {
        var data = taggedTemplateLiteral_default()([
          '\n      0% {\n        transform: translate(0, 0);\n      }\n      100% {\n        transform: translate(',
          'px, 0);\n      }\n    ',
        ])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = taggedTemplateLiteral_default()([
          '\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function ellipsis_styles_templateObject() {
        var data = taggedTemplateLiteral_default()([
          '\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n',
        ])
        return (
          (ellipsis_styles_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var anim1 = Object(core_browser_esm.keyframes)(
          ellipsis_styles_templateObject(),
        ),
        anim3 = Object(core_browser_esm.keyframes)(_templateObject2()),
        Ellipsis = Object(styled_base_browser_esm.a)('div', {
          target: 'eyd0krb0',
          label: 'Ellipsis',
        })(
          'align-items:center;display:flex;height:100%;position:relative;width:100%;',
          function (props) {
            var _props$baseColor,
              _props$speed,
              _props$innerSize,
              loaderSize = props.loaderSize,
              color =
                null !== (_props$baseColor = props.baseColor) &&
                void 0 !== _props$baseColor
                  ? _props$baseColor
                  : styles.b.theme[props.styleTheme],
              speed =
                null !== (_props$speed = props.speed) && void 0 !== _props$speed
                  ? _props$speed
                  : 600,
              width = loaderSize - (loaderSize % 3),
              increment = width / 3,
              left = loaderSize - width + 1,
              itemSize =
                null !== (_props$innerSize = props.innerSize) &&
                void 0 !== _props$innerSize
                  ? _props$innerSize
                  : Math.floor(0.75 * increment),
              anim2 = Object(core_browser_esm.keyframes)(
                _templateObject3(),
                increment,
              )
            return Object(core_browser_esm.css)(
              'align-items:center;display:flex;height:100%;position:relative;width:100%;div{animation-timing-function:cubic-bezier(0,1,1,0);background:',
              color,
              ';border-radius:50%;height:',
              itemSize,
              'px;position:absolute;width:',
              itemSize,
              'px;}div:nth-of-type(1){animation:',
              anim1,
              ' ',
              speed,
              'ms infinite;left:',
              left,
              'px;}div:nth-of-type(2){animation:',
              anim2,
              ' ',
              speed,
              'ms infinite;left:',
              left,
              'px;}div:nth-of-type(3){animation:',
              anim2,
              ' ',
              speed,
              'ms infinite;left:',
              left + increment,
              'px;}div:nth-of-type(4){animation:',
              anim3,
              ' ',
              speed,
              'ms infinite;left:',
              left + 2 * increment,
              'px;};label:Ellipsis;',
            )
          },
          '',
        )
      __webpack_require__(28), __webpack_require__(15)
      function grid_styles_templateObject() {
        var data = taggedTemplateLiteral_default()([
          '\n  0%, 100% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n',
        ])
        return (
          (grid_styles_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var grid_styles_anim = Object(core_browser_esm.keyframes)(
          grid_styles_templateObject(),
        ),
        Grid = Object(styled_base_browser_esm.a)('div', {
          target: 'e1bpyakk0',
          label: 'Grid',
        })(
          'display:inline-block;position:relative;',
          function (props) {
            var _props$baseColor,
              _props$speed,
              _props$innerSize,
              loaderSize = props.loaderSize,
              color =
                null !== (_props$baseColor = props.baseColor) &&
                void 0 !== _props$baseColor
                  ? _props$baseColor
                  : styles.b.theme[props.styleTheme],
              speed =
                null !== (_props$speed = props.speed) && void 0 !== _props$speed
                  ? _props$speed
                  : 1200,
              itemSize =
                null !== (_props$innerSize = props.innerSize) &&
                void 0 !== _props$innerSize
                  ? _props$innerSize
                  : Math.round(0.2 * loaderSize),
              combinedItemsSize = 3 * itemSize,
              spacer = Math.floor((loaderSize - combinedItemsSize) / 4),
              combinedSpaceSize = 4 * spacer,
              padding = Math.floor(
                (loaderSize - combinedSpaceSize - combinedItemsSize) / 2,
              ),
              positions = [
                padding + spacer,
                padding + itemSize + 2 * spacer,
                padding + 2 * itemSize + 3 * spacer,
              ],
              delayOffset = Math.floor(-speed / 3),
              delays = Array.from(Array(4)).map(function (_, idx) {
                return delayOffset * (idx + 1)
              })
            return Object(core_browser_esm.css)(
              'height:',
              loaderSize,
              'px;width:',
              loaderSize,
              'px;div{animation:',
              grid_styles_anim,
              ' ',
              speed,
              'ms linear infinite;background:',
              color,
              ';border-radius:50%;height:',
              itemSize,
              'px;position:absolute;width:',
              itemSize,
              'px;}div:nth-of-type(1){left:',
              positions[0],
              'px;top:',
              positions[0],
              'px;}div:nth-of-type(2){animation-delay:',
              delays[0],
              'ms;left:',
              positions[1],
              'px;top:',
              positions[0],
              'px;}div:nth-of-type(3){animation-delay:',
              delays[1],
              'ms;left:',
              positions[2],
              'px;top:',
              positions[0],
              'px;}div:nth-of-type(4){animation-delay:',
              delays[0],
              'ms;left:',
              positions[0],
              'px;top:',
              positions[1],
              'px;}div:nth-of-type(5){animation-delay:',
              delays[1],
              'ms;left:',
              positions[1],
              'px;top:',
              positions[1],
              'px;}div:nth-of-type(6){animation-delay:',
              delays[2],
              'ms;left:',
              positions[2],
              'px;top:',
              positions[1],
              'px;}div:nth-of-type(7){animation-delay:',
              delays[1],
              'ms;left:',
              positions[0],
              'px;top:',
              positions[2],
              'px;}div:nth-of-type(8){animation-delay:',
              delays[2],
              'ms;left:',
              positions[1],
              'px;top:',
              positions[2],
              'px;}div:nth-of-type(9){animation-delay:',
              delays[3],
              'ms;left:',
              positions[2],
              'px;top:',
              positions[2],
              'px;};label:Grid;',
            )
          },
          '',
        )
      function singleRing_styles_templateObject() {
        var data = taggedTemplateLiteral_default()([
          '\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n',
        ])
        return (
          (singleRing_styles_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var _loaderMap,
        _loaderTypeToChildCou,
        LoaderShape,
        singleRing_styles_anim = Object(core_browser_esm.keyframes)(
          singleRing_styles_templateObject(),
        ),
        SingleRing = Object(styled_base_browser_esm.a)('div', {
          target: 'e1vobjpc0',
          label: 'SingleRing',
        })(
          'height:100%;width:100%;',
          function (props) {
            var _props$baseColor,
              _props$innerSize,
              _props$speed,
              color1 =
                null !== (_props$baseColor = props.baseColor) &&
                void 0 !== _props$baseColor
                  ? _props$baseColor
                  : styles.b.theme[props.styleTheme],
              color2 = Object(polished_esm.d)(0.6, color1),
              size =
                null !== (_props$innerSize = props.innerSize) &&
                void 0 !== _props$innerSize
                  ? _props$innerSize
                  : (function defaultInnerSize(loaderSize) {
                      return Math.max(Math.round(0.1 * loaderSize), 1)
                    })(props.loaderSize),
              speed =
                null !== (_props$speed = props.speed) && void 0 !== _props$speed
                  ? _props$speed
                  : 600
            return Object(core_browser_esm.css)(
              '&:after{animation:',
              singleRing_styles_anim,
              ' ',
              speed,
              'ms linear infinite;border:',
              size,
              'px solid #fff;border-color:',
              color1,
              ' ',
              color2,
              ' ',
              color2,
              ' ',
              color1,
              ";border-radius:50%;content:' ';display:block;height:calc(100% - ",
              size,
              'px * 2);width:calc(100% - ',
              size,
              'px * 2);};label:SingleRing;',
            )
          },
          '',
        ),
        loaderTestIds_container = 'vs-loader__container',
        loaderTestIds_overlay = 'vs-loader__overlay',
        loaderTestIds_wrapper = 'vs-loader__wrapper'
      !(function (LoaderShape) {
        ;(LoaderShape.DualRing = 'dualRing'),
          (LoaderShape.Ellipsis = 'ellipsis'),
          (LoaderShape.Grid = 'grid'),
          (LoaderShape.SingleRing = 'singleRing')
      })(LoaderShape || (LoaderShape = {}))
      var loaderMap =
          ((_loaderMap = {}),
          defineProperty_default()(_loaderMap, LoaderShape.DualRing, DualRing),
          defineProperty_default()(_loaderMap, LoaderShape.Ellipsis, Ellipsis),
          defineProperty_default()(_loaderMap, LoaderShape.Grid, Grid),
          defineProperty_default()(
            _loaderMap,
            LoaderShape.SingleRing,
            SingleRing,
          ),
          _loaderMap),
        loaderTypeToChildCount =
          ((_loaderTypeToChildCou = {}),
          defineProperty_default()(
            _loaderTypeToChildCou,
            LoaderShape.DualRing,
            0,
          ),
          defineProperty_default()(
            _loaderTypeToChildCou,
            LoaderShape.Ellipsis,
            4,
          ),
          defineProperty_default()(_loaderTypeToChildCou, LoaderShape.Grid, 9),
          defineProperty_default()(
            _loaderTypeToChildCou,
            LoaderShape.SingleRing,
            0,
          ),
          _loaderTypeToChildCou),
        Loader = react.memo(function (props) {
          var overlay = props.overlay,
            loaderShape = props.loaderShape || LoaderShape.DualRing,
            propsWithDefaults = Object.assign(
              {
                loaderShape: loaderShape,
                loaderSize: 40,
                styleTheme: styles.a.Primary,
              },
              props,
            ),
            childMapper = react.useMemo(
              function () {
                return Object(utils.a)(loaderTypeToChildCount[loaderShape])
              },
              [loaderShape],
            )
          return react.createElement(
            Container,
            extends_default()(
              { 'data-testid': loaderTestIds_container },
              propsWithDefaults,
            ),
            overlay &&
              react.createElement(
                Overlay,
                extends_default()(
                  { 'data-testid': loaderTestIds_overlay },
                  propsWithDefaults,
                ),
              ),
            react.createElement(
              LoaderWrapper,
              extends_default()(
                { 'data-testid': loaderTestIds_wrapper },
                propsWithDefaults,
              ),
              react.createElement(
                loaderMap[loaderShape],
                propsWithDefaults,
                react.createElement(
                  react.Fragment,
                  null,
                  childMapper.map(function (_, idx) {
                    return react.createElement('div', { key: idx })
                  }),
                ),
              ),
            ),
          )
        })
      try {
        ;(Loader.displayName = 'Loader'),
          (Loader.__docgenInfo = {
            description: '',
            displayName: 'Loader',
            props: {
              baseColor: {
                defaultValue: null,
                description:
                  '(Optional) Override base color for the loader. If specified, this will be\nused as the primary color for the loader. Otherwise, the loader will fallback\nto using the color set from specified (or default) styling theme.',
                name: 'baseColor',
                required: !1,
                type: { name: 'string' },
              },
              innerSize: {
                defaultValue: null,
                description: '',
                name: 'innerSize',
                required: !1,
                type: { name: 'number' },
              },
              overlay: {
                defaultValue: null,
                description:
                  'Whether this Loader should render in "overlay" mode.\nThis will cause the following changes to rendering:\n- The Loader will use "absolute" positioning and fill the parent element\n- The Loader will render an overlay to obscure the parent element\n\nNote that the parent element must use "relative" positioning in order for this to work as expected.',
                name: 'overlay',
                required: !1,
                type: { name: 'boolean' },
              },
              loaderShape: {
                defaultValue: null,
                description: '',
                name: 'loaderShape',
                required: !1,
                type: { name: 'LoaderShape' },
              },
              loaderSize: {
                defaultValue: null,
                description: '',
                name: 'loaderSize',
                required: !1,
                type: { name: 'number' },
              },
              speed: {
                defaultValue: null,
                description:
                  'The speed of the animation in ms; if none is provided, each animation will\nchoose its own default.',
                name: 'speed',
                required: !1,
                type: { name: 'number' },
              },
              styleTheme: {
                defaultValue: null,
                description: '',
                name: 'styleTheme',
                required: !1,
                type: { name: 'StyleTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Loader/Loader.tsx#Loader'] = {
              docgenInfo: Loader.__docgenInfo,
              name: 'Loader',
              path: 'src/Loader/Loader.tsx#Loader',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    4: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return StyleTheme
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return colors
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return shadows
        })
      __webpack_require__(33)
      var _Object$freeze,
        StyleTheme,
        defineProperty = __webpack_require__(47),
        defineProperty_default = __webpack_require__.n(defineProperty)
      !(function (StyleTheme) {
        ;(StyleTheme.Primary = 'primary'),
          (StyleTheme.Secondary = 'secondary'),
          (StyleTheme.Success = 'success'),
          (StyleTheme.Info = 'info'),
          (StyleTheme.Warning = 'warning'),
          (StyleTheme.Danger = 'danger')
      })(StyleTheme || (StyleTheme = {}))
      var base = Object.freeze({
          aqua: '#7fdbff',
          black: '#111',
          blue: '#0074d9',
          fuchsia: '#f012be',
          gray: '#aaa',
          green: '#2ecc40',
          lime: '#01ff70',
          maroon: '#85144b',
          navy: '#001f3f',
          olive: '#3d9970',
          orange: '#ff851b',
          purple: '#b10dc9',
          red: '#ff4136',
          silver: '#ddd',
          teal: '#39cccc',
          white: 'white',
          yellow: '#ffdc00',
        }),
        theme = Object.freeze(
          ((_Object$freeze = {}),
          defineProperty_default()(
            _Object$freeze,
            StyleTheme.Primary,
            '#0074d9',
          ),
          defineProperty_default()(
            _Object$freeze,
            StyleTheme.Secondary,
            '#aaa',
          ),
          defineProperty_default()(
            _Object$freeze,
            StyleTheme.Success,
            '#2ecc40',
          ),
          defineProperty_default()(_Object$freeze, StyleTheme.Info, '#39cccc'),
          defineProperty_default()(
            _Object$freeze,
            StyleTheme.Warning,
            '#ff851b',
          ),
          defineProperty_default()(
            _Object$freeze,
            StyleTheme.Danger,
            '#ff4136',
          ),
          _Object$freeze),
        ),
        colors = Object.freeze({ base: base, theme: theme })
      __webpack_require__(19)
      var _ref = {
          name: '5jbfi',
          styles:
            'box-shadow:0 1px 3px rgba(0,0,0,0.07),0 1px 2px rgba(0,0,0,0.12);',
        },
        shadows = Object.freeze({
          light: function light() {
            return _ref
          },
        })
    },
    52: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Button_Button
      })
      __webpack_require__(33)
      var helpers_extends = __webpack_require__(7),
        extends_default = __webpack_require__.n(helpers_extends),
        objectWithoutProperties = __webpack_require__(267),
        objectWithoutProperties_default = __webpack_require__.n(
          objectWithoutProperties,
        ),
        react = __webpack_require__(0),
        Loader = __webpack_require__(31),
        styles = __webpack_require__(4),
        styled_base_browser_esm = __webpack_require__(26),
        core_browser_esm = __webpack_require__(19),
        polished_esm = __webpack_require__(50)
      var StyledButton = Object(styled_base_browser_esm.a)('button', {
          target: 'e1052bn30',
          label: 'StyledButton',
        })(
          'align-items:center;border-radius:4px;border-style:solid;border-width:1px;font-family:inherit;font-size:1rem;font-weight:inherit;height:',
          '2.25rem',
          ';justify-content:center;line-height:',
          '2.25rem',
          ';padding:0 0.75em;position:relative;text-align:center;text-decoration:none;transition:all 0.2s;user-select:none;vertical-align:middle;white-space:nowrap;&:focus{outline:none;}& + button{margin-left:8px;}cursor:',
          function (_ref) {
            var disabled = _ref.disabled,
              showLoader = _ref.showLoader
            return disabled || showLoader ? 'default' : 'pointer'
          },
          ';display:',
          function (_ref2) {
            return _ref2.block ? 'block' : 'inline-flex'
          },
          ';opacity:',
          function (_ref3) {
            return _ref3.disabled ? 0.65 : 1
          },
          ';width:',
          function (_ref4) {
            return _ref4.block ? '100%' : 'auto'
          },
          ';',
          function (_ref5) {
            return (function buttonTheme(styleTheme) {
              var baseColor = styles.b.theme[styleTheme],
                shadow = Object(polished_esm.d)(
                  0.5,
                  Object(polished_esm.c)(0.08, baseColor),
                )
              function offsetColor(offset) {
                return offset < 0
                  ? Object(polished_esm.b)(-0.08 * offset, baseColor)
                  : offset > 0
                  ? Object(polished_esm.c)(0.08 * offset, baseColor)
                  : baseColor
              }
              function colorState() {
                var offset =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0
                return {
                  backgroundColor: offsetColor(offset),
                  borderBottomColor: offsetColor(offset - 1),
                  borderColor: offsetColor(offset),
                }
              }
              return Object(core_browser_esm.css)(
                colorState(0),
                ';color:white;&:hover{',
                colorState(-1),
                ';color:white;}&:active{',
                colorState(-2),
                ';color:white;}&:focus{box-shadow:0 0 0 0.2rem ',
                shadow,
                ';color:white;}&:disabled{',
                colorState(2),
                ';color:white;}',
              )
            })(_ref5.styleTheme)
          },
          ' ',
          function (_ref6) {
            var styleTheme = _ref6.styleTheme
            return _ref6.outline
              ? (function outlineButton(styleTheme) {
                  var baseColor = styles.b.theme[styleTheme]
                  return Object(core_browser_esm.css)(
                    '&,&:focus:not(:hover){background-color:transparent;border-color:',
                    baseColor,
                    ';color:',
                    baseColor,
                    ';}',
                  )
                })(styleTheme)
              : null
          },
          '',
        ),
        ButtonLoader = Object(styled_base_browser_esm.a)(Loader.a, {
          target: 'e1052bn31',
          label: 'ButtonLoader',
        })(
          'display:',
          function (_ref7) {
            return _ref7.showLoader ? 'inherit' : 'none'
          },
          ';opacity:',
          function (_ref8) {
            return _ref8.showLoader ? 1 : 0
          },
          ';position:absolute;transition:opacity ',
          200,
          'ms ease;visibility:',
          function (_ref9) {
            return _ref9.showLoader ? 'inherit' : 'hidden'
          },
          ';',
        ),
        ButtonChildren = Object(styled_base_browser_esm.a)('span', {
          target: 'e1052bn32',
          label: 'ButtonChildren',
        })(
          'opacity:',
          function (_ref10) {
            return _ref10.showLoader ? 0 : 1
          },
          ';transition:opacity ',
          200,
          'ms ease;',
        ),
        defaultOptionalProps = Object.freeze({
          block: !1,
          disabled: !1,
          nativeButtonType: 'button',
          outline: !1,
          showLoader: !1,
          styleTheme: styles.a.Primary,
        }),
        Button_Button = function Button(props) {
          var children = props.children,
            nativeButtonType = props.nativeButtonType,
            passThruProps = objectWithoutProperties_default()(props, [
              'children',
              'nativeButtonType',
            ]),
            disabled = passThruProps.disabled,
            showLoader = passThruProps.showLoader,
            isDisabled = disabled || showLoader || !1,
            type = nativeButtonType || 'button'
          return react.createElement(
            StyledButton,
            extends_default()({}, defaultOptionalProps, passThruProps, {
              disabled: isDisabled,
              type: type,
            }),
            react.createElement(
              ButtonChildren,
              { showLoader: showLoader },
              children,
            ),
            react.createElement(ButtonLoader, {
              baseColor: 'white',
              innerSize: 3,
              loaderShape: Loader.b.SingleRing,
              loaderSize: 20,
              showLoader: showLoader,
            }),
          )
        }
      Button_Button.displayName = 'Button'
      try {
        ;(Button_Button.displayName = 'Button'),
          (Button_Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              nativeButtonType: {
                defaultValue: null,
                description: '',
                name: 'nativeButtonType',
                required: !1,
                type: { name: '"button" | "submit" | "reset"' },
              },
              outline: {
                defaultValue: null,
                description: '',
                name: 'outline',
                required: !1,
                type: { name: 'boolean' },
              },
              showLoader: {
                defaultValue: null,
                description: '',
                name: 'showLoader',
                required: !1,
                type: { name: 'boolean' },
              },
              styleTheme: {
                defaultValue: null,
                description: '',
                name: 'styleTheme',
                required: !1,
                type: { name: 'StyleTheme' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Button/Button.tsx#Button'] = {
              docgenInfo: Button_Button.__docgenInfo,
              name: 'Button',
              path: 'src/Button/Button.tsx#Button',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    645: function (module, exports, __webpack_require__) {
      __webpack_require__(646),
        __webpack_require__(825),
        __webpack_require__(826),
        __webpack_require__(1045),
        __webpack_require__(1474),
        __webpack_require__(1508),
        __webpack_require__(1513),
        __webpack_require__(1525),
        __webpack_require__(1614),
        __webpack_require__(1619),
        __webpack_require__(1621),
        (module.exports = __webpack_require__(1634))
    },
    724: function (module, exports) {},
    776: function (module, exports) {},
    82: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52)
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return _Button__WEBPACK_IMPORTED_MODULE_0__.a
      })
    },
    826: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(445)
    },
  },
  [[645, 1, 2]],
])
//# sourceMappingURL=main.5d9ba02bcdaf550ce546.bundle.js.map
