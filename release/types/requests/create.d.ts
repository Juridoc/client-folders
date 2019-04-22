/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Folder creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Parent folder Id.
     */
    parentId?: string;
    /**
     * List of sharing grants.
     */
    grantsIdList?: string[];
    /**
     * Folder type.
     */
    type: Types.Common;
    /**
     * Folder name.
     */
    name: string;
}
