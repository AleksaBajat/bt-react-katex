(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("react"), require("prop-types"), require("katex"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "react",
        "prop-types",
        "katex"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {}, global.react, global.propTypes, global.katex);
})(this, function(exports, _react, _proptypes, _katex) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        BlockMath: function() {
            return BlockMath;
        },
        InlineMath: function() {
            return InlineMath;
        }
    });
    _react = /*#__PURE__*/ _interop_require_wildcard(_react);
    _proptypes = /*#__PURE__*/ _interop_require_default(_proptypes);
    _katex = /*#__PURE__*/ _interop_require_default(_katex);
    function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
            return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
            return {
                default: obj
            };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
            return cache.get(obj);
        }
        var newObj = {
            __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var key in obj){
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        if (cache) {
            cache.set(obj, newObj);
        }
        return newObj;
    }
    /**
 * @typedef {import("react").ReactNode} ReactNode
 *
 *
 * @callback ErrorRenderer
 * @param {Error} error
 * @returns {ReactNode}
 *
 *
 * @typedef {object} MathComponentPropsWithMath
 * @property {string} math
 * @property {ReactNode=} children
 * @property {string=} errorColor
 * @property {ErrorRenderer=} renderError
 *
 *
 * @typedef {object} MathComponentPropsWithChildren
 * @property {string=} math
 * @property {ReactNode} children
 * @property {string=} errorColor
 * @property {ErrorRenderer=} renderError
 *
 * @typedef {MathComponentPropsWithMath | MathComponentPropsWithChildren} MathComponentProps
 */ const createMathComponent = (Component, { displayMode })=>{
        /**
   *
   * @param {MathComponentProps} props
   * @returns {ReactNode}
   */ const MathComponent = ({ children, errorColor, math, renderError })=>{
            const formula = math !== null && math !== void 0 ? math : children;
            const { html, error } = (0, _react.useMemo)(()=>{
                try {
                    const html = _katex.default.renderToString(formula, {
                        displayMode,
                        errorColor,
                        throwOnError: !!renderError
                    });
                    return {
                        html,
                        error: undefined
                    };
                } catch (error) {
                    if (error instanceof _katex.default.ParseError || error instanceof TypeError) {
                        return {
                            error
                        };
                    }
                    return error;
                }
            }, [
                formula,
                errorColor,
                renderError
            ]);
            if (error) {
                return renderError ? renderError(error) : /*#__PURE__*/ _react.default.createElement(Component, {
                    html: `${error.message}`
                });
            }
            return /*#__PURE__*/ _react.default.createElement(Component, {
                html: html
            });
        };
        MathComponent.propTypes = {
            children: _proptypes.default.string,
            errorColor: _proptypes.default.string,
            math: _proptypes.default.string,
            renderError: _proptypes.default.func
        };
        return MathComponent;
    };
    const InternalPathComponentPropTypes = {
        html: _proptypes.default.string.isRequired
    };
    const InternalBlockMath = ({ html })=>{
        return /*#__PURE__*/ _react.default.createElement("div", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    };
    InternalBlockMath.propTypes = InternalPathComponentPropTypes;
    const InternalInlineMath = ({ html })=>{
        return /*#__PURE__*/ _react.default.createElement("span", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    };
    InternalInlineMath.propTypes = InternalPathComponentPropTypes;
    const BlockMath = createMathComponent(InternalBlockMath, {
        displayMode: true
    });
    const InlineMath = createMathComponent(InternalInlineMath, {
        displayMode: false
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEthVGVYIGZyb20gJ2thdGV4JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KFwicmVhY3RcIikuUmVhY3ROb2RlfSBSZWFjdE5vZGVcbiAqXG4gKlxuICogQGNhbGxiYWNrIEVycm9yUmVuZGVyZXJcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICpcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBNYXRoQ29tcG9uZW50UHJvcHNXaXRoTWF0aFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1hdGhcbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlPX0gY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nPX0gZXJyb3JDb2xvclxuICogQHByb3BlcnR5IHtFcnJvclJlbmRlcmVyPX0gcmVuZGVyRXJyb3JcbiAqXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTWF0aENvbXBvbmVudFByb3BzV2l0aENoaWxkcmVuXG4gKiBAcHJvcGVydHkge3N0cmluZz19IG1hdGhcbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlfSBjaGlsZHJlblxuICogQHByb3BlcnR5IHtzdHJpbmc9fSBlcnJvckNvbG9yXG4gKiBAcHJvcGVydHkge0Vycm9yUmVuZGVyZXI9fSByZW5kZXJFcnJvclxuICpcbiAqIEB0eXBlZGVmIHtNYXRoQ29tcG9uZW50UHJvcHNXaXRoTWF0aCB8IE1hdGhDb21wb25lbnRQcm9wc1dpdGhDaGlsZHJlbn0gTWF0aENvbXBvbmVudFByb3BzXG4gKi9cblxuY29uc3QgY3JlYXRlTWF0aENvbXBvbmVudCA9IChDb21wb25lbnQsIHsgZGlzcGxheU1vZGUgfSkgPT4ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtNYXRoQ29tcG9uZW50UHJvcHN9IHByb3BzXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICBjb25zdCBNYXRoQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4sIGVycm9yQ29sb3IsIG1hdGgsIHJlbmRlckVycm9yIH0pID0+IHtcbiAgICBjb25zdCBmb3JtdWxhID0gbWF0aCA/PyBjaGlsZHJlbjtcblxuICAgIGNvbnN0IHsgaHRtbCwgZXJyb3IgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IEthVGVYLnJlbmRlclRvU3RyaW5nKGZvcm11bGEsIHtcbiAgICAgICAgICBkaXNwbGF5TW9kZSxcbiAgICAgICAgICBlcnJvckNvbG9yLFxuICAgICAgICAgIHRocm93T25FcnJvcjogISFyZW5kZXJFcnJvcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgaHRtbCwgZXJyb3I6IHVuZGVmaW5lZCB9O1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgS2FUZVguUGFyc2VFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfSwgW2Zvcm11bGEsIGVycm9yQ29sb3IsIHJlbmRlckVycm9yXSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZW5kZXJFcnJvciA/IHJlbmRlckVycm9yKGVycm9yKSA6IDxDb21wb25lbnQgaHRtbD17YCR7ZXJyb3IubWVzc2FnZX1gfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCBodG1sPXtodG1sfSAvPjtcbiAgfTtcblxuICBNYXRoQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlcnJvckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1hdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVuZGVyRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHJldHVybiBNYXRoQ29tcG9uZW50O1xufTtcblxuY29uc3QgSW50ZXJuYWxQYXRoQ29tcG9uZW50UHJvcFR5cGVzID0ge1xuICBodG1sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbnRlcm5hbEJsb2NrTWF0aCA9ICh7IGh0bWwgfSkgPT4ge1xuICByZXR1cm4gPGRpdiBkYXRhLXRlc3RpZD1cInJlYWN0LWthdGV4XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuSW50ZXJuYWxCbG9ja01hdGgucHJvcFR5cGVzID0gSW50ZXJuYWxQYXRoQ29tcG9uZW50UHJvcFR5cGVzO1xuXG5jb25zdCBJbnRlcm5hbElubGluZU1hdGggPSAoeyBodG1sIH0pID0+IHtcbiAgcmV0dXJuIDxzcGFuIGRhdGEtdGVzdGlkPVwicmVhY3Qta2F0ZXhcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz47XG59O1xuXG5JbnRlcm5hbElubGluZU1hdGgucHJvcFR5cGVzID0gSW50ZXJuYWxQYXRoQ29tcG9uZW50UHJvcFR5cGVzO1xuXG5leHBvcnQgY29uc3QgQmxvY2tNYXRoID0gY3JlYXRlTWF0aENvbXBvbmVudChJbnRlcm5hbEJsb2NrTWF0aCwgeyBkaXNwbGF5TW9kZTogdHJ1ZSB9KTtcbmV4cG9ydCBjb25zdCBJbmxpbmVNYXRoID0gY3JlYXRlTWF0aENvbXBvbmVudChJbnRlcm5hbElubGluZU1hdGgsIHsgZGlzcGxheU1vZGU6IGZhbHNlIH0pO1xuIl0sIm5hbWVzIjpbIkJsb2NrTWF0aCIsIklubGluZU1hdGgiLCJjcmVhdGVNYXRoQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiZGlzcGxheU1vZGUiLCJNYXRoQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJlcnJvckNvbG9yIiwibWF0aCIsInJlbmRlckVycm9yIiwiZm9ybXVsYSIsImh0bWwiLCJlcnJvciIsInVzZU1lbW8iLCJLYVRlWCIsInJlbmRlclRvU3RyaW5nIiwidGhyb3dPbkVycm9yIiwidW5kZWZpbmVkIiwiUGFyc2VFcnJvciIsIlR5cGVFcnJvciIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiSW50ZXJuYWxQYXRoQ29tcG9uZW50UHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsIkludGVybmFsQmxvY2tNYXRoIiwiZGl2IiwiZGF0YS10ZXN0aWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkludGVybmFsSW5saW5lTWF0aCIsInNwYW4iXSwibWFwcGluZ3MiOiI7bUdBQStCLGtCQUNULHVCQUNKOzs7UUFGYTtRQUNUO1FBQ0o7Ozs7Ozs7Ozs7Ozs7OztRQXVGTEEsU0FBUzttQkFBVEE7O1FBQ0FDLFVBQVU7bUJBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdEZiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCQyxHQUVELE1BQU1DLHNCQUFzQixDQUFDQyxXQUFXLEVBQUVDLFdBQVcsRUFBRTtRQUNyRDs7OztHQUlDLEdBQ0QsTUFBTUMsZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFO1lBQ2hFLE1BQU1DLFVBQVVGLGlCQUFBQSxrQkFBQUEsT0FBUUY7WUFFeEIsTUFBTSxFQUFFSyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyxJQUFBQSxjQUFPLEVBQUM7Z0JBQzlCLElBQUk7b0JBQ0YsTUFBTUYsT0FBT0csY0FBSyxDQUFDQyxjQUFjLENBQUNMLFNBQVM7d0JBQ3pDTjt3QkFDQUc7d0JBQ0FTLGNBQWMsQ0FBQyxDQUFDUDtvQkFDbEI7b0JBRUEsT0FBTzt3QkFBRUU7d0JBQU1DLE9BQU9LO29CQUFVO2dCQUNsQyxFQUFFLE9BQU9MLE9BQU87b0JBQ2QsSUFBSUEsaUJBQWlCRSxjQUFLLENBQUNJLFVBQVUsSUFBSU4saUJBQWlCTyxXQUFXO3dCQUNuRSxPQUFPOzRCQUFFUDt3QkFBTTtvQkFDakI7b0JBRUEsT0FBT0E7Z0JBQ1Q7WUFDRixHQUFHO2dCQUFDRjtnQkFBU0g7Z0JBQVlFO2FBQVk7WUFFckMsSUFBSUcsT0FBTztnQkFDVCxPQUFPSCxjQUFjQSxZQUFZRyx1QkFBUyw2QkFBQ1Q7b0JBQVVRLE1BQU0sR0FBR0MsTUFBTVEsT0FBTyxFQUFFOztZQUMvRTtZQUVBLHFCQUFPLDZCQUFDakI7Z0JBQVVRLE1BQU1BOztRQUMxQjtRQUVBTixjQUFjZ0IsU0FBUyxHQUFHO1lBQ3hCZixVQUFVZ0Isa0JBQVMsQ0FBQ0MsTUFBTTtZQUMxQmhCLFlBQVllLGtCQUFTLENBQUNDLE1BQU07WUFDNUJmLE1BQU1jLGtCQUFTLENBQUNDLE1BQU07WUFDdEJkLGFBQWFhLGtCQUFTLENBQUNFLElBQUk7UUFDN0I7UUFFQSxPQUFPbkI7SUFDVDtJQUVBLE1BQU1vQixpQ0FBaUM7UUFDckNkLE1BQU1XLGtCQUFTLENBQUNDLE1BQU0sQ0FBQ0csVUFBVTtJQUNuQztJQUVBLE1BQU1DLG9CQUFvQixDQUFDLEVBQUVoQixJQUFJLEVBQUU7UUFDakMscUJBQU8sNkJBQUNpQjtZQUFJQyxlQUFZO1lBQWNDLHlCQUF5QjtnQkFBRUMsUUFBUXBCO1lBQUs7O0lBQ2hGO0lBRUFnQixrQkFBa0JOLFNBQVMsR0FBR0k7SUFFOUIsTUFBTU8scUJBQXFCLENBQUMsRUFBRXJCLElBQUksRUFBRTtRQUNsQyxxQkFBTyw2QkFBQ3NCO1lBQUtKLGVBQVk7WUFBY0MseUJBQXlCO2dCQUFFQyxRQUFRcEI7WUFBSzs7SUFDakY7SUFFQXFCLG1CQUFtQlgsU0FBUyxHQUFHSTtJQUV4QixNQUFNekIsWUFBWUUsb0JBQW9CeUIsbUJBQW1CO1FBQUV2QixhQUFhO0lBQUs7SUFDN0UsTUFBTUgsYUFBYUMsb0JBQW9COEIsb0JBQW9CO1FBQUU1QixhQUFhO0lBQU0ifQ==
