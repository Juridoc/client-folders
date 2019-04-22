/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Folder update request.
 */
@RestDB.Schema.Entity('folders/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Parent folder Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public parentId?: string;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList?: string[];

  /**
   * Folder name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;
}
