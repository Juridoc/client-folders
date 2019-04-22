/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Folder creation request.
 */
@RestDB.Schema.Entity('folders')
@Class.Describe()
export class Create extends Class.Null {
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
   * Folder type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Common))
  @Class.Public()
  public type!: Types.Common;

  /**
   * Folder name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;
}
