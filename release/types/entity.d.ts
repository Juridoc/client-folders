/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from './types';
/**
 * Folder entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Folder Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Parent folder Id.
     */
    parentId?: string;
    /**
     * List of sharing grants.
     */
    grantsIdList?: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Folder type.
     */
    type: Types.Common;
    /**
     * Folder name.
     */
    name: string;
}
