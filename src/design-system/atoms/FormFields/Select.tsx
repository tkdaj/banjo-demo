import type { Accessor, JSX } from 'solid-js';
import { For, createSignal } from 'solid-js';
import { css } from 'solid-styled';

import { pxToRem, useTheme } from '@banjo/theme';

import { Typography } from '../Typography';

export interface SelectOption {
  id: string;
  label: {
    ariaLabel: string;
    uiElementSelected: JSX.Element;
    uiListElement: JSX.Element;
  };
  value: string | number;
}

interface SelectProps {
  id: string;
  labelId: string;
  listItems: SelectOption[];
  selectedItem: Accessor<SelectOption>;
  onChange: (selectedItem: SelectOption) => void;
}

export function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = createSignal(false);
  const { theme } = useTheme();

  const handleButtonClick = () => {
    setIsOpen(!isOpen());
  };

  css`
    .selectContainer {
      display: flex;
      position: relative;
      margin-bottom: ${pxToRem(30)}
      min-width: ${pxToRem(120)};
      .selectButton {
        box-shadow: ${pxToRem(0)} ${pxToRem(1)} ${pxToRem(2)} rgba(50, 50, 71, 0.08), ${pxToRem(
    0
  )} ${pxToRem(0)} ${pxToRem(1)} rgba(50, 50, 71, 0.2);
        cursor: pointer;
        border: none;
        padding: ${pxToRem(12)} ${pxToRem(17)};
        border-radius: ${pxToRem(6)};
        position: relative;
        width: 100%;
        justify-content: space-between;
        padding-right: ${pxToRem(24)};
        background-color: ${theme.palette.colors.strong};
        text-align: left;
        .selectButtonText {
          display: flex;
          margin: 0;
          font-weight: normal;
          cursor: pointer;
        }
        &::after {
          position: absolute;
          content: '';
          border-left: ${pxToRem(6)} solid transparent;
          border-right: ${pxToRem(6)} solid transparent;
          border-top: ${pxToRem(8)} solid ${theme.palette.colors.placeholder};
          top: 50%;
          transform: translateY(-50%);
          right: ${pxToRem(8)};
          transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        &.expanded::after {
          transform: translateY(-50%) rotate(180deg);
        }
      }
      .listItems {
        background-color: ${theme.palette.colors.strong}
        z-index: 1;
        margin: 0;
        padding: 0;
        list-style-type: none;
        position: absolute;
        width: 100%;
        top: calc(100% + ${pxToRem(2)});
        display: flex;
        flex-direction: column;
        box-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(5)} rgba(193, 193, 193, 0.3);
        &.hide {
          display: none;
        }
        .listItem {
          cursor: pointer;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: ${pxToRem(7.5)} ${pxToRem(15)};
          &:hover {
            box-shadow: inset ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(5)} rgba(193, 193, 193, 0.3);
          }
          &:active {
            box-shadow: inset ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(5)} rgb(193, 193, 193);
          }
          &:active {
            & > * {
              transform: translate( ${pxToRem(1)},  ${pxToRem(1)});
              position: relative;
            }
          }
        }
      }
    }
  `;

  return (
    <div class="selectContainer">
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen()}
        aria-labelledby={props.labelId}
        classList={{ selectButton: true, expanded: isOpen() }}
        onClick={handleButtonClick}
      >
        <Typography configName="selectText" id={props.labelId} class="selectButtonText">
          {props.selectedItem().label.uiElementSelected ?? 'Select an option'}
        </Typography>
      </button>
      <ul
        aria-hidden={!isOpen}
        classList={{
          listItems: true,
          hide: !isOpen(),
        }}
        role="listbox"
        tabIndex={-1}
      >
        <For each={props.listItems}>
          {(option) => (
            <li
              class="listItem"
              id={option.id}
              role="option"
              aria-selected={props.selectedItem() === option}
              tabIndex={0}
              onClick={() => {
                props.onChange(option);
                setIsOpen(false);
              }}
            >
              <Typography configName="selectText">{option.label.uiListElement}</Typography>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
