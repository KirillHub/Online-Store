
import {
	Association,
	CreationOptional,
	ForeignKey,
	InferAttributes,
	InferCreationAttributes,
	Model,
 } from 'sequelize';
 
  class UserTest extends Model<InferAttributes<UserTest>, InferCreationAttributes<UserTest>> {
	declare id: CreationOptional<number>;
	declare name: string;
	declare email: string;
	declare password: string;
 
	/*
	 declare preferredName: string | null;
	 declare role: string;
	 declare ownerId: ForeignKey<UserTest['id']>;
	 declare createdAt: CreationOptional<Date>;
	 declare updatedAt: CreationOptional<Date>;
 */
 
	/*
	  declare getProjects: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
	  declare addProject: HasManyAddAssociationMixin<Project, number>;
	  declare addProjects: HasManyAddAssociationsMixin<Project, number>;
	  declare setProjects: HasManySetAssociationsMixin<Project, number>;
	  declare removeProject: HasManyRemoveAssociationMixin<Project, number>;
	  declare removeProjects: HasManyRemoveAssociationsMixin<Project, number>;
	  declare hasProject: HasManyHasAssociationMixin<Project, number>;
	  declare hasProjects: HasManyHasAssociationsMixin<Project, number>;
	  declare countProjects: HasManyCountAssociationsMixin;
	  declare createProject: HasManyCreateAssociationMixin<Project, 'ownerId'>;
  */
 
	/*
	 declare projects?: NonAttribute<Project[]>;
  
	 get fullName(): NonAttribute<string> {
		return this.name;
	 }
  
	 declare static associations: {
		projects: Association<User, Project>;
	 };
	*/
 }
 