# Conduction Components

## Changelog

- **Version 3**

  - 3.0.0: InputDate now includes Den Haag InputDate component, requiring react-hook-form controls.

- **Version 2**

  - 2.0.34: SelectMultiple and SelectCreate update to include defaultValue in react-hook-form controller.
  - 2.0.33: PrimaryTopNav sub items doesn't overlap main navbar anymore
  - 2.0.32:
    - SelectSingle update to include defaultValue in react-hook-form controller.
  - 2.0.31:
    - PrimaryTopNav clickbox now includes padding of nav items.
  - 2.0.30:
    - Selects now have an z-index.
    - Checkboxes now automatically have an id wich is a camelCase of "checkbox" plus the label, "checkboxLabel".
    - Removed styles warning on tag.
  - 2.0.29:
    - Added remove option to tags.
    - SelectSingle now removes selected option if filter deselect it.
  - 2.0.27 & 2.0.28: Cleanup
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
  - 2.0.11 & 2.0.12:
    - Added disabled state to SelectSingle component.
  - 2.0.10:
    - Added InputFloat (.00 decimals) component.
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
