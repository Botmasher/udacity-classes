# CONFIG functions for manipulating python runtime
import sys

# CONFIG ORM
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base

# CONFIG create foreign key relationships
from sqlalchemy.orm import relationship

# CONFIG use in creation code at end of file
from sqlalchemy import create_engine

# CONFIG make instance of imported declarative_base
# lets code know these correspond to tables in our db
Base = declarative_base()


# CLASS represent table as a class; extend base class
class Restaurant (Base):
	# TABLE setup
	__tablename__ = 'restaurant' 
class MenuItem (Base):
	# TABLE setup
	__tablename__ = 'menu_item'


## CONFIG end of file ##
# point to db - here create a sqlite file to sim db #
engine = create_engine('sqlite://restaurantmenu.db')

# go into db, add classes created as new tables in db #
Base.metadata.create_all(engine)