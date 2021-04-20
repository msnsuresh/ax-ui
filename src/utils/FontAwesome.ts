import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartLine,
  faChevronDown,
  faChevronUp,
  faTable,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

export const initializeFontAwesome = (): void => {
  library.add(faChartLine, faTable, faThLarge, faChevronUp, faChevronDown);
};
