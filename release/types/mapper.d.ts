/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Folders mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new folder based on the specified creation request.
     * @param request Folder creation request.
     * @returns Returns a promise to get the folder Id.
     * @throws Throws an error when the folder wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the folder that corresponds to the specified folder Id.
     * @param id Folder Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the folder entity.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the folder that corresponds to the specified folder Id based on the given update request.
     * @param id Folder Id.
     * @param request Folder update request.
     * @returns Returns a promise to get true when the folder was updated, false otherwise.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all folders that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the folder list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all folders that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of folders or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the folder that corresponds to the specified folder Id.
     * @param id Folder Id.
     * @returns Returns a promise to get true when the folder was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
