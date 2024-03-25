# Conduction Components

## Changelog

- **Version 2.2 (breaking changes from 2.1.x)**

  - 2.2.49: Removed Jumbotron component.
  - 2.2.48: Updated CardHeader and package.json.
  - 2.2.46 / 2.2.47: Fixed minor css parse error.
  - 2.2.45: Updated Pagination and select to ensure more WCAG compliancy.
  - 2.2.44: Updated PrimaryTopNav to allow font-weight.
  - 2.2.43: Updated DownloadCard to allow size as string.
  - 2.2.42:
    - Updated PrimaryTopNav to have seperate dropdown tokens.
    - Updated Pagination to include border-bottom.
    - Updated DownloadCard to include icon color.
    - Updated CardWrapper to include hover color.
  - 2.2.41: Updated displayswitch component to have pointer.
  - 2.2.40:
    - Updated DownloadCard to only accept fontawesome icons.
    - Removed tooltip from PrimaryTopNav component and updated dropdown.
  - 2.2.39:
    - Updated PrimaryTopNav component to include tooltip and better dropdown.
    - Updated Logo component to have navbar option.
  - 2.2.38: Updated DownloadCard to show only one icon.
  - 2.2.37: Updated DownloadCard to include tooltip and Removed opacity token from Tooltip the fix bug.
  - 2.2.35 & 2.2.36:
    - Bugfix versions.
  - 2.2.34:
    - Added select options grouping logic.
  - 2.2.33:
    - Refactored DownloadCard.
  - 2.2.32: Added more tokens to DownloadCard.
  - 2.2.31:
    - Added custom content to NotificationPopUp.
    - Refactored DownloadCard to NLDS.
  - 2.2.30: Renamed checkbox.module.css.
  - 2.2.29: Updated build script to reslove css errors.
  - 2.2.27/2.2.28:
    - Updated dependencies to latest versions.
    - Updated Checkbox component to NLDS.
  - 2.2.26: Updated NotificationPopUp secondary button to have hover and href.
  - 2.2.25:
    - Added box-shadow to CardWrapper.
    - Added item border-radius to PrimaryTopNav.
  - 2.2.24:
    - Added DisplaySwitch component.
    - Removed align hover state on card-header.
  - 2.2.23: Added Logo component.
  - 2.2.22: Updated Jumbotron component to be more customizable.
  - 2.2.21:
    - Removed warning from HorizontalOverflowWrapper.
    - Added Jumbotron component.
    - Updated card-header to align hover states.
  - 2.2.20: Updated primary top nav to have more types.
  - 2.2.19: Refactored primary top nav to simplify sub-items.
  - 2.2.18:
    - Refactored select role attribute.
    - Fixed Pagination-button border-radius.
    - Added colors for Focus and Selected options in Select forms.
    - Add HorizontalOverflowWrapper component and refactor Tabs Component overflow scroll.
  - 2.2.17: Refactor Pagination to include aria labels and make aria label required on texarea, input and select components.
  - 2.2.15/2.2.16: Added more NLDS options to Pagination.
  - 2.2.13/2.2.14:
    - Updated Textarea and all Input components to allow aria-label.
    - Updated Select components.
  - 2.2.12: Updated Select components to WCAG with aria-label and role.
  - 2.2.11: Updated Primary and Secondary topnav to NLDS.
  - 2.2.10: Added z-index to tooltip.
  - 2.2.9: Added CardWrapper, CardHeader, CardHeaderTitle, CardHeaderDate to index.
  - 2.2.8:
    - Updated Pagination to show current page.
    - Updated Tabs component to have correct border-bottom length.
  - 2.2.7: Updated TableWrapper component and updated Tabs component.
  - 2.2.6: Added TableWrapper component and updated Tabs component.
  - 2.2.5: Updated Tabs component.
  - 2.2.4: Refactor the Tooltip component to include react-tooltip version 5+.
  - 2.2.3: Added Tabs component.
  - 2.2.2:
    - Removed Den Haag Textfield dependencies.
    - Removed Den Haag SideNav dependencies.
    - Removed Den Haag Textarea dependencies.
    - Removed Den Haag Process Steps dependencies.
    - Removed Den Haag Form Field dependencies.
    - Removed Den Haag Button dependencies.
  - 2.2.1: Removed Den Haag icon dependencies and redundant RichContentCard.
  - 2.2.0:
    - Removed Den Haag designTokensComponent.
    - Removed Den Haag formControlLabel.
    - Removed InputRadio component.
    - Removed Den Haag stylesProvider.
    - Removed Den Haag link.
    - Removed Den Haag heading.
    - Removed Den Haag paragraph.
    - Removed Den Haag Table imports from CreateKeyValue component.
    - Removed EditableTableRow component.
    - Removed Den Haag divider.

- **Version 2.1 (breaking changes from 2.0.x)**

  - 2.1.40:
    - Added border tokens to Pagination.
    - Added border-bottom tokens to CardWrapper.
  - 2.1.39: Added more tokens to Pagination.
  - 2.1.38: Added Pagination.
  - 2.1.37: Added more design-tokens to all select options.
  - 2.1.36:
    - Updated CardWrapper.
    - Added CardHeader.
  - 2.1.35: Added CardWrapper.
  - 2.1.34: Refactor Den Haag textbox and textarea to Utrecht; add Single Select design tokens.
  - 2.1.33: Added optional placeholder to all select elements.
  - 2.1.32: Add inline-padding to container, remove redundant (breaking and unused) components, up React version.
  - 2.1.31: Removed Den Haag implementations which hold shapeRendering warnings.
  - 2.1.29/2.1.30: Added optional menuPlacement to all select elements.
  - 2.1.28: Fixed PrimaryTopNav dropdown token and added new features for dropdown.
  - 2.1.27: TimeFormat in DatePicker is now consistant with DateFormat.
  - 2.1.26: Avoid dependency on `@gemeente-denhaag/components-react`, only depend on components we actually use.
  - 2.1.25: Added id prop to select component.
  - 2.1.24: Add new design tokens for topnav dropdown.
  - 2.1.23: Added optional error messages to CreateKeyValue and unused classname removed warning.
  - 2.1.22: Added optional error messages to textarea, select and input fields.
  - 2.1.21: Added optional copy button and refactored delete button in CreateKeyValue.
  - 2.1.20: Updated react.fc code and github actions added.
  - 2.1.19: Refactor Tooltip layout.
  - 2.1.18: Add default value to Textarea component.
  - 2.1.17: Refactor to NotificationPopUp to include layoutClassName.
  - 2.1.16: Refactor ToolTip layoutClassName placement.
  - 2.1.15: Add InputDate component based on react-datepicker.
  - 2.1.14: Refactor checkbox to remove svg errors.
  - 2.1.13: Refactor components to remove svg errors (e.g. shape-rendering => shapeRendering).
  - 2.1.12: Added ToolTip max-width and break-word.
  - 2.1.11: Added CreateKeyValue component disabled state on delete buttons.
  - 2.1.10: PrimaryTopNav overflow scroll removed from desktop.
  - 2.1.8 & 2.1.9: PrimaryTopNav will always show subItems on mobile.
  - 2.1.7: Add disabled placholders to all Select elements.
  - 2.1.6: Add disabled state to CreateKeyValue component
  - 2.1.4 & 2.1.5: Remove IInputProps from CreateKeyValue to undo duplicate defaultValue prop.
  - 2.1.3: Export IKeyValue from CreateKeyValue component.
  - 2.1.2: REVERT 2.1.1 and 2.1.0.
  - 2.1.1: Deploy issues.
  - 2.1.0: InputDate now includes Den Haag InputDate component, requiring react-hook-form controls.

- **Version 2**

  - 2.0.34: SelectMultiple and SelectCreate update to include defaultValue in react-hook-form controller.
  - 2.0.33: PrimaryTopNav sub items doesn't overlap main navbar anymore.
  - 2.0.32: SelectSingle update to include defaultValue in react-hook-form controller.
  - 2.0.31: PrimaryTopNav clickbox now includes padding of nav items.
  - 2.0.30:
    - Selects now have an z-index.
    - Checkboxes now automatically have an id wich is a camelCase of "checkbox" plus the label, "checkboxLabel".
    - Removed styles warning on tag.
  - 2.0.29:
    - Added remove option to tags.
    - SelectSingle now removes selected option if filter deselect it.
  - 2.0.27 & 2.0.28: Cleanup.
  - 2.0.26: Added Select element error states.
  - 2.0.25: Added InputURL component.
  - 2.0.24: Bugfix: @conduction not showing.
  - 2.0.23:
    - Added optional boxshadow to PrimaryTopNav.
    - Added maxLength to both TopNavs and added a gap to the icon and label of a TopNav item.
  - 2.0.22: Refactor InputNumber and InputFloat to return number type.
  - 2.0.21: Add InputDateTime component.
  - 2.0.20: Bugfix Textarea component to include correct field validation.
  - 2.0.19: Add disabled state to Textarea and InputCheckbox components.
  - 2.0.17 & 2.0.18: Refactor PrimaryTopNav styling.
  - 2.0.16: Remove styling warnings.
  - 2.0.15: Added mobile support to PrimaryTopNav.
  - 2.0.14: Refactored SelectCreate placeholder text.
  - 2.0.13: removed round borders of tag.
  - 2.0.11 & 2.0.12: Added disabled state to SelectSingle component.
  - 2.0.10: Added InputFloat (.00 decimals) component.
  - 2.0.9:
    - Added optional defaultChecked to InputCheckbox.
    - Added CreateKeyValue input.
    - Added CreateSelect input.
  - 2.0.8:
    - Added new Tooltip component using React-tooltip.
    - Added active status to PrimaryTopNav.
    - Added active status to SecondaryTopNav.
  - 2.0.7:
    - Added new BadgeCounter component.
    - Added CodeBlock component.
  - 2.0.6:
    - Added optional icon with default icon to the primary and secondary button in NotificationPopUp.
    - Added a handleClick function to the DownloadCard.
    - Added clickFunction, layoutClassName and renamed tag to label in the Tag component.
    - Edited DetailsCard to accommodate changes made to Tag component.
    - Edited RichContentCard to accommodate changes made to Tag component.
  - 2.0.5: wrong camelcase in npm publish/build fix.
  - 2.0.4: added layoutClassName to InfoCard.
  - 2.0.3: Bugfix: --conduction-container typo removed.
  - 2.0.2: Refactor SelectSingle formField with optional props.
  - 2.0.1: Refactor SecondaryTopNav css module import.
  - 2.0.0: components are now dependent on `--skeleton` design tokens, currently found [here](https://github.com/OpenCatalogi/web-app/blob/development/pwa/src/styling/design-tokens/skeleton-design-tokens.css).

- **Version 1**

  - No changelog available.
