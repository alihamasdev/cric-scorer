import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/tailwind.css";
import "./theme/variables.css";

import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, grid, square, star, triangle } from "ionicons/icons";
import { createRoot } from "react-dom/client";
import { Redirect, Route } from "react-router-dom";

import { CompareScreen } from "@/screens/compare";
import { MatchesScreen } from "@/screens/matches";
import { PlayersScreen } from "@/screens/players";
import { StatsScreen } from "@/screens/stats";
import { TeamsScreen } from "@/screens/teams";

const container = document.getElementById("root");
if (!container) throw new Error("Could not find the root element");

const root = createRoot(container);

setupIonicReact();

root.render(
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Redirect path="/" to="/matches" exact />
					<Route path="/matches" render={() => <MatchesScreen />} />
					<Route path="/stats" render={() => <StatsScreen />} />
					<Route path="/compare" render={() => <CompareScreen />} />
					<Route path="/teams" render={() => <TeamsScreen />} />
					<Route path="/players" render={() => <PlayersScreen />} />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="matches" href="/matches">
						<IonIcon aria-hidden="true" icon={triangle} />
						<IonLabel>Matches</IonLabel>
					</IonTabButton>
					<IonTabButton tab="stats" href="/stats">
						<IonIcon aria-hidden="true" icon={ellipse} />
						<IonLabel>Stats</IonLabel>
					</IonTabButton>
					<IonTabButton tab="compare" href="/compare">
						<IonIcon aria-hidden="true" icon={square} />
						<IonLabel>Compare</IonLabel>
					</IonTabButton>
					<IonTabButton tab="teams" href="/teams">
						<IonIcon aria-hidden="true" icon={star} />
						<IonLabel>Teams</IonLabel>
					</IonTabButton>
					<IonTabButton tab="players" href="/players">
						<IonIcon aria-hidden="true" icon={grid} />
						<IonLabel>Players</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>,
);
