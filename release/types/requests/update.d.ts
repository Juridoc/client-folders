/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Folder update request.
 */
export declare class Update extends Class.Null {
    /**
     * Parent folder Id.
     */
    parentId?: string;
    /**
     * List of sharing grants.
     */
    grantsIdList?: string[];
    /**
     * Folder name.
     */
    name?: string;
}
