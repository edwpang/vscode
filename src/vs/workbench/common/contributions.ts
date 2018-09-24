/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';


import { IInstantiationService, IConstructorSignature0 } from 'vs/platform/instantiation/common/instantiation';
import { ILifecycleService, LifecyclePhase } from 'vs/platform/lifecycle/common/lifecycle';

// --- Workbench Contribution Registry

/**
 * A workbench contribution that will be loaded when the workbench starts and disposed when the workbench shuts down.
 */
export interface IWorkbenchContribution {
	// Marker Interface
}

export namespace Extensions {
	export const Workbench = 'workbench.contributions.kind';
}

export type IWorkbenchContributionSignature = IConstructorSignature0<IWorkbenchContribution>;

export interface IWorkbenchContributionsRegistry {

	/**
	 * Registers a workbench contribution to the platform that will be loaded when the workbench starts and disposed when
	 * the workbench shuts down.
	 *
	 * @param phase the lifecycle phase when to instantiate the contribution.
	 */
	registerWorkbenchContribution(contribution: IWorkbenchContributionSignature, phase: LifecyclePhase): void;

	/**
	 * Starts the registry by providing the required services.
	 */
	start(instantiationService: IInstantiationService, lifecycleService: ILifecycleService): void;
}
